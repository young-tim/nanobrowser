<h1 align="center">
    <img src="https://github.com/user-attachments/assets/ec60b0c4-87ba-48f4-981a-c55ed0e8497b" height="100" width="375" alt="banner" /><br>
</h1>


<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nanobrowser)
[![Twitter](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/nanobrowser_ai)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/NN3ABHggMK)
[<img src="https://deepwiki.com/badge.svg" height="28" alt="Ask DeepWiki">](https://deepwiki.com/nanobrowser/nanobrowser)

</div>

## 🌐 Nanobrowser

Nanobrowser 是一款在浏览器中运行的开源 AI 网页自动化工具。作为 OpenAI Operator 的免费替代品，提供灵活的 LLM 选项与多代理系统。

⬇️ 从 [Chrome 应用商店](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) 免费获取 Nanobrowser

👏 加入我们的 [Discord](https://discord.gg/NN3ABHggMK) | [X](https://x.com/nanobrowser_ai) 社区

❤️ 喜欢 Nanobrowser 吗？请给我们一颗星星 🌟 并帮助分享！

<div align="center">
<img src="https://github.com/user-attachments/assets/112c4385-7b03-4b81-a352-4f348093351b" width="600" alt="Nanobrowser Demo GIF" />
<p><em>Nanobrowser 的多代理系统实时分析 HuggingFace，其中 Planner 会在遇到障碍时自行修正，并动态指示 Navigator 调整做法——这一切都在本地浏览器中执行。</em></p>
</div>

## 🔥 为什么选择 Nanobrowser？

正在寻找功能强大的 AI 浏览器代理，却不想每月为 OpenAI Operator 支付 200 美元吗？**Nanobrowser** 作为一款 Chrome 扩展程序，提供高级的网页自动化能力，同时让您拥有完全的控制权：

- **100% 免费** - 无订阅费或隐藏成本。安装后使用自己的 API 密钥，只需支付给供应商的 API 使用费。
- **注重隐私** - 所有处理都在本地浏览器内完成。您的认证信息会储存在本地，绝不会与任何云服务分享。
- **灵活的 LLM 选项** - 可连接您偏好的 LLM 供应商，并可为不同代理选择不同模型。
- **完全开源** - 浏览器自动化过程完全透明，没有任何黑箱操作或隐藏的处理程序。

> **请注意：** 我们目前支持 OpenAI、Anthropic、Gemini、Ollama、Groq、Cerebras、Llama 以及自定义的 OpenAI 兼容供应商，未来将会支持更多。


## 📊 主要功能

- **多代理系统**：由专业的 AI 代理协同合作，完成复杂的网页工作流程
- **交互式侧边面板**：直观的聊天界面，提供实时的状态更新
- **任务自动化**：跨网站无缝自动化重复性任务
- **后续提问**：针对已完成的任务提出与上下文相关的追问
- **对话历史记录**：轻松访问并管理与 AI 代理的互动历史
- **支持多种 LLM**：可连接您偏好的 LLM 供应商，并为不同代理分配不同模型


## 🌐 浏览器支持

**正式支持：**
- **Chrome** - 完整支持所有功能
- **Edge** - 完整支持所有功能

**不支持：**
- Firefox、Safari，以及其他 Chromium 衍生浏览器 (Opera、Arc 等)

> **注意**：虽然 Nanobrowser 可能在其他 Chromium 系浏览器上运行，我们仍建议使用 Chrome 或 Edge，以获得最佳体验并确保兼容性。


## 🚀 快速入门

1. **从 Chrome 应用商店安装** (稳定版)：
   * 前往 [Nanobrowser 的 Chrome 应用商店页面](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal)
   * 点击 [添加至 Chrome] 按钮
   * 在提示出现时确认安装

> **重要提示**：若要体验最新功能，请参考下方的 [「手动安装最新版本」](#-手动安装最新版本) 进行安装，因为 Chrome 应用商店的版本可能会因审核流程而延迟。

2. **设置代理模型**：
   * 点击工具栏中的 Nanobrowser 图标以打开侧边面板
   * 点击右上角的 `设置` 图标
   * 添加 LLM API 密钥
   * 为不同代理 (Navigator、Planner) 选择要使用的模型

## 🔧 手动安装最新版本

若要获取包含所有最新功能的版本：

1. **下载**
    * 从官方 GitHub 的 [发布页面](https://github.com/nanobrowser/nanobrowser/releases) 下载最新的 `nanobrowser.zip` 文件。

2. **安装**：
    * 解压缩 `nanobrowser.zip`。
    * 在 Chrome 中打开 `chrome://extensions/`
    * 启用 `开发者模式` (右上角)
    * 点击 `加载已解压的扩展程序` (左上角)
    * 选择已解压缩的 `nanobrowser` 文件夹。

3. **设置代理模型**
    * 点击工具栏中的 Nanobrowser 图标以打开侧边面板
    * 点击右上角的 `设置` 图标。
    * 添加 LLM API 密钥。
    * 为不同代理 (Navigator、Planner) 选择要使用的模型。

4. **升级**：
    * 从发布页面下载最新的 `nanobrowser.zip` 文件。
    * 解压缩并用新文件覆盖您现有的 Nanobrowser 文件。
    * 前往 Chrome 的 `chrome://extensions/` 页面，然后在 Nanobrowser 卡片上点击刷新图标。

## 🛠️ 从源代码构建

如果您更喜欢自行构建 Nanobrowser，请按照以下步骤操作：

1. **先决条件**：
   * [Node.js](https://nodejs.org/) (v22.12.0 或更高版本)
   * [pnpm](https://pnpm.io/installation) (v9.15.1 或更高版本)

2. **克隆仓库**：
   ```bash
   git clone https://github.com/nanobrowser/nanobrowser.git
   cd nanobrowser
   ```

3. **安装依赖包**：
   ```bash
   pnpm install
   ```

4. **构建扩展程序**：
   ```bash
   pnpm build
   ```

5. **加载扩展程序**：
   * 构建完成的扩展程序将位于 `dist` 目录中
   * 依照「手动安装」一节中的步骤，将扩展程序加载到浏览器

6. **开发模式** (可选)：
   ```bash
   pnpm dev
   ```

## 🤖 选择您的模型

Nanobrowser 允许您为每个代理设置不同的 LLM 模型，以平衡性能与成本。以下是建议的设置：

### 追求高性能
- **Planner**：Claude Sonnet 4
  - 更佳的推理与规划能力
- **Navigator**：Claude Haiku 3.5
  - 有效地处理网页导航任务
  - 在性能与成本之间取得良好平衡

### 讲求成本效益
- **Planner**：Claude Haiku 或 GPT-4o
  - 以较低成本获得合理的性能
  - 处理复杂任务可能需要更多的迭代
- **Navigator**：Gemini 2.5 Flash 或 GPT-4o-mini
  - 轻量级且具成本效益
  - 适合基本的导航任务

### 本地模型
- **设置选项**：
  - 使用 Ollama 或其他自定义的 OpenAI 兼容供应商，在本地运行模型
  - 零 API 成本并确保完全隐私，所有数据都保留在本地电脑

- **推荐模型**：
  - **Qwen3-30B-A3B-Instruct-2507**
  - **Falcon3 10B**
  - **Qwen 2.5 Coder 14B**
  - **Mistral Small 24B**
  - [社区最新测试结果](https://gist.github.com/maximus2600/75d60bf3df62986e2254d5166e2524cb)
  - 欢迎社区成员在我们的 [Discord](https://discord.gg/NN3ABHggMK) 分享其他本地模型的使用经验

- **提示词工程**：
  - 本地模型通常需要更具体、清晰的提示词
  - 避免使用高层次、模糊的指令
  - 将复杂的任务拆解成清晰、详细的步骤
  - 提供明确的上下文与限制条件

> **请注意**：讲求成本效益的设置可能会产生较不稳定的输出，且处理复杂任务时可能需要更多的迭代。

> **提示**：欢迎尽情尝试自己的模型设置！找到绝佳组合了吗？到我们的 [Discord](https://discord.gg/NN3ABHggMK) 与社区分享，帮助大家优化设置。

## 💡 实际应用案例

以下是几个只要一句话就能完成的强大任务：

1. **新闻摘要**：
   > "前往 TechCrunch，抓取过去 24 小时内的 10 大头条新闻"

2. **GitHub 研究**：
   > "在 GitHub 上找出星标数最多的热门 Python 仓库"

3. **购物研究**：
   > "在 Amazon 上找一款具备防水设计、价格低于 50 美元的便携式蓝牙音箱，且电池续航力至少要有 10 小时"

## 🛠️ 发展蓝图

我们正积极开发 Nanobrowser，未来将有更多令人期待的功能推出，欢迎加入我们！

请至我们的 [GitHub Discussions](https://github.com/nanobrowser/nanobrowser/discussions/85) 查看详细的发展蓝图与即将推出的功能。

## 🤝 如何贡献

**我们需要您的帮助，让 Nanobrowser 变得更好！** 我们欢迎各种形式的贡献：

*  **分享提示词与使用案例**
   * 加入我们的 [Discord 服务器](https://discord.gg/NN3ABHggMK)。
   * 分享您如何使用 Nanobrowser，协助我们建立实用的提示词与实际应用案例数据库。
*  **提供反馈意见**
   * 试用 Nanobrowser，并在我们的 [Discord 服务器](https://discord.gg/NN3ABHggMK) 上提供性能反馈或改进建议。
* **贡献代码**
   * 请参阅我们的 [CONTRIBUTING.md](CONTRIBUTING.md)，了解如何为本项目贡献代码的指南。
   * 针对错误修复、新功能或文档改进，提出 Pull Request。


我们深信开源与社区协作的力量。欢迎与我们一同打造网页自动化的未来！


## 🔒 安全性

如果您发现安全漏洞，请**不要**通过 Issues、Pull Request 或 Discussions 公开披露。

请创建一个 [GitHub Security Advisory](https://github.com/nanobrowser/nanobrowser/security/advisories/new) 来负责任地报告此漏洞。这让我们能在漏洞被公开之前解决问题。

我们感谢您协助维护 Nanobrowser 及其用户的安全！

## 💬 社区

欢迎加入我们持续成长的开发者与用户社区：

- [Discord](https://discord.gg/NN3ABHggMK) - 与团队及社区成员交流
- [Twitter](https://x.com/nanobrowser_ai) - 关注最新的更新与公告
- [GitHub Discussions](https://github.com/nanobrowser/nanobrowser/discussions) - 分享您的想法并提出问题

## 👏 致谢

Nanobrowser 的开发建立在许多优秀的开源项目之上：

- [Browser Use](https://github.com/browser-use/browser-use)
- [Puppeteer](https://github.com/EmergenceAI/Agent-E)
- [Chrome Extension Boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)
- [LangChain](https://github.com/langchain-ai/langchainjs)

由衷感谢这些项目的创建者与贡献者！

## 📄 授权

本项目采用 Apache License 2.0 授权 - 详情请参阅 [LICENSE](LICENSE) 文件。

由 Nanobrowser 团队用 ❤️ 打造。

喜欢 Nanobrowser 吗？请给我们一颗星星 🌟 并加入我们的 [Discord](https://discord.gg/NN3ABHggMK) | [X](https://x.com/nanobrowser_ai)

## ⚠️ 衍生项目免责声明

**我们明确「不予支持、不提供支持、也不参与」任何** 基于本代码所打造、与加密货币、代币、NFT 或其他区块链相关应用有关的项目。

**此类衍生项目与官方 Nanobrowser 项目或核心团队** 「**没有任何关联**、**非由我们维护**、亦**未与我们有任何联系**」。

**对于使用第三方衍生项目所造成的任何损失、损害或问题，我们概不负责。** 用户与其互动时请自行承担风险。

**我们保留权利** 对任何滥用或误导性使用我们名称、代码或品牌的行为，公开声明切割并加以澄清。

我们鼓励开源创新，但也提醒社区务必审慎判断。请在使用由独立开发者基于本代码所打造的任何软件或服务前，先充分了解相关风险。


