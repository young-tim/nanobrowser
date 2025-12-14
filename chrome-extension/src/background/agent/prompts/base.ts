import { HumanMessage, type SystemMessage } from '@langchain/core/messages';
import type { AgentContext } from '@src/background/agent/types';
import { wrapUntrustedContent } from '../messages/utils';
import { createLogger } from '@src/background/log';

const logger = createLogger('BasePrompt');
/**
 * 所有提示类型的基础抽象类
 */
abstract class BasePrompt {
  /**
   * 返回定义AI角色和行为的系统消息
   * @returns 来自LangChain的SystemMessage
   */
  abstract getSystemMessage(): SystemMessage;

  /**
   * 返回特定提示类型的用户消息
   * @param context - 生成用户消息所需的可选上下文数据
   * @returns 来自LangChain的HumanMessage
   */
  abstract getUserMessage(context: AgentContext): Promise<HumanMessage>;

  /**
   * 构建包含浏览器状态的用户消息
   * @param context - 代理上下文
   * @returns 来自LangChain的HumanMessage
   */
  async buildBrowserStateUserMessage(context: AgentContext): Promise<HumanMessage> {
    const browserState = await context.browserContext.getState(context.options.useVision);
    const rawElementsText = browserState.elementTree.clickableElementsToString(context.options.includeAttributes);

    let formattedElementsText = '';
    if (rawElementsText !== '') {
      const scrollInfo = `[当前页面的滚动信息] window.scrollY: ${browserState.scrollY}, document.body.scrollHeight: ${browserState.scrollHeight}, window.visualViewport.height: ${browserState.visualViewportHeight}, 视口高度占可滚动距离的百分比: ${Math.round((browserState.visualViewportHeight / (browserState.scrollHeight - browserState.visualViewportHeight)) * 100)}%\n`;
      logger.info(scrollInfo);
      const elementsText = wrapUntrustedContent(rawElementsText);
      formattedElementsText = `${scrollInfo}[页面开始]\n${elementsText}\n[页面结束]\n`;
    } else {
      formattedElementsText = '空页面';
    }

    let stepInfoDescription = '';
    if (context.stepInfo) {
      stepInfoDescription = `当前步骤: ${context.stepInfo.stepNumber + 1}/${context.stepInfo.maxSteps}`;
    }

    const timeStr = new Date().toISOString().slice(0, 16).replace('T', ' '); // 格式: YYYY-MM-DD HH:mm
    stepInfoDescription += `当前日期和时间: ${timeStr}`;

    let actionResultsDescription = '';
    if (context.actionResults.length > 0) {
      for (let i = 0; i < context.actionResults.length; i++) {
        const result = context.actionResults[i];
        if (result.extractedContent) {
          actionResultsDescription += `\n动作结果 ${i + 1}/${context.actionResults.length}: ${result.extractedContent}`;
        }
        if (result.error) {
          // 仅使用错误的最后一行
          const error = result.error.split('\n').pop();
          actionResultsDescription += `\n动作错误 ${i + 1}/${context.actionResults.length}: ...${error}`;
        }
      }
    }

    const currentTab = `{id: ${browserState.tabId}, url: ${browserState.url}, title: ${browserState.title}}`;
    const otherTabs = browserState.tabs
      .filter(tab => tab.id !== browserState.tabId)
      .map(tab => `- {id: ${tab.id}, url: ${tab.url}, title: ${tab.title}}`);
    const stateDescription = `
[任务历史记忆结束]
[当前状态从此处开始]
以下是一次性信息 - 如果你需要记住它，请将其写入内存:
当前标签页: ${currentTab}
其他可用标签页:
  ${otherTabs.join('\n')}
当前页面视口内顶层的交互元素:
${formattedElementsText}
${stepInfoDescription}
${actionResultsDescription}
`;

    if (browserState.screenshot && context.options.useVision) {
      return new HumanMessage({
        content: [
          { type: 'text', text: stateDescription },
          {
            type: 'image_url',
            image_url: { url: `data:image/jpeg;base64,${browserState.screenshot}` },
          },
        ],
      });
    }

    return new HumanMessage(stateDescription);
  }
}

export { BasePrompt };
