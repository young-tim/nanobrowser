import { useState } from 'react';
import { FiDownload, FiUpload, FiRefreshCw } from 'react-icons/fi';
import { t } from '@extension/i18n';
import { Button } from '@extension/ui';
import { generalSettingsStore, firewallStore, llmProviderStore, agentModelStore } from '@extension/storage';

interface ExportConfig {
  general: any;
  firewall: any;
  providers: any;
  agentModels: any;
}

const ConfigSettings = ({ isDarkMode = false }: { isDarkMode?: boolean }) => {
  const [importStatus, setImportStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleExport = async () => {
    try {
      // 获取所有配置
      const general = await generalSettingsStore.getSettings();
      const firewall = await firewallStore.getFirewall();
      const providers = await llmProviderStore.getAllProviders();
      const agentModels = await agentModelStore.getAllAgentModels();

      const exportConfig: ExportConfig = {
        general,
        firewall,
        providers,
        agentModels,
      };

      // 创建并下载文件
      const dataStr = JSON.stringify(exportConfig, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(dataBlob);
      link.download = `nanobrowser-config-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();

      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('导出配置时出错:', error);
      setImportStatus({ type: 'error', message: t('config_export_error') });
    }
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = async e => {
        try {
          const content = e.target?.result as string;
          const config: ExportConfig = JSON.parse(content);

          // 导入通用设置
          if (config.general) {
            await generalSettingsStore.updateSettings(config.general);
          }

          // 导入防火墙设置
          if (config.firewall) {
            await firewallStore.updateFirewall(config.firewall);
          }

          // 导入提供商设置
          if (config.providers) {
            // 先清除现有提供商
            const currentProviders = await llmProviderStore.getAllProviders();
            for (const providerId of Object.keys(currentProviders)) {
              await llmProviderStore.removeProvider(providerId);
            }

            // 添加新提供商
            for (const [providerId, providerConfig] of Object.entries(config.providers)) {
              await llmProviderStore.setProvider(providerId, providerConfig as any);
            }
          }

          // 导入代理模型设置
          if (config.agentModels) {
            // 先重置所有代理模型
            const currentModels = await agentModelStore.getAllAgentModels();
            for (const agent of Object.keys(currentModels)) {
              await agentModelStore.resetAgentModel(agent as any);
            }

            // 设置新代理模型
            for (const [agent, modelConfig] of Object.entries(config.agentModels)) {
              await agentModelStore.setAgentModel(agent as any, modelConfig as any);
            }
          }

          setImportStatus({ type: 'success', message: t('config_import_success') });
        } catch (error) {
          console.error('导入配置时出错:', error);
          setImportStatus({ type: 'error', message: t('config_import_error') });
        }
      };
      reader.readAsText(file);
    } catch (error) {
      console.error('读取文件时出错:', error);
      setImportStatus({ type: 'error', message: t('config_import_read_error') });
    }

    // 重置文件输入
    event.target.value = '';
  };

  const handleResetToDefaults = async () => {
    // 显示确认对话框
    const confirmed = window.confirm(t('config_reset_confirm'));

    if (!confirmed) {
      return; // 用户取消操作
    }

    try {
      // 重置通用设置
      await generalSettingsStore.resetToDefaults();

      // 重置防火墙设置
      await firewallStore.resetToDefaults();

      // 重置提供商设置
      const currentProviders = await llmProviderStore.getAllProviders();
      for (const providerId of Object.keys(currentProviders)) {
        await llmProviderStore.removeProvider(providerId);
      }

      // 重置代理模型设置
      const currentModels = await agentModelStore.getAllAgentModels();
      for (const agent of Object.keys(currentModels)) {
        await agentModelStore.resetAgentModel(agent as any);
      }

      setImportStatus({ type: 'success', message: t('config_reset_success') });
    } catch (error) {
      console.error('重置配置时出错:', error);
      setImportStatus({ type: 'error', message: t('config_reset_error') });
    }
  };

  return (
    <section className="space-y-6">
      <div
        className={`rounded-lg border ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-blue-100 bg-white'} p-6 text-left shadow-sm`}>
        <h2 className={`mb-4 text-left text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          {t('options_config_header')}
        </h2>

        <div className="space-y-6">
          <div className={`rounded-lg border ${isDarkMode ? 'border-slate-600' : 'border-gray-200'} p-4`}>
            <h3 className={`mb-3 text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('config_export_title')}
            </h3>
            <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('config_export_description')}
            </p>
            <Button
              onClick={handleExport}
              className={`flex items-center space-x-2 rounded-md px-4 py-2 ${
                isDarkMode ? 'bg-sky-700 text-white hover:bg-sky-600' : 'bg-sky-500 text-white hover:bg-sky-600'
              }`}>
              <FiDownload className="h-4 w-4" />
              <span>{t('config_export_button')}</span>
            </Button>
          </div>

          <div className={`rounded-lg border ${isDarkMode ? 'border-slate-600' : 'border-gray-200'} p-4`}>
            <h3 className={`mb-3 text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('config_import_title')}
            </h3>
            <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('config_import_description')}
            </p>
            <div className="flex items-center space-x-3">
              <label
                className={`flex cursor-pointer items-center space-x-2 rounded-md px-4 py-2 ${
                  isDarkMode
                    ? 'bg-slate-700 text-gray-200 hover:bg-slate-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}>
                <FiUpload className="h-4 w-4" />
                <span>{t('config_import_button')}</span>
                <input type="file" accept=".json" onChange={handleImport} className="hidden" />
              </label>
            </div>
          </div>

          <div className={`rounded-lg border ${isDarkMode ? 'border-slate-600' : 'border-gray-200'} p-4`}>
            <h3 className={`mb-3 text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('config_reset_title')}
            </h3>
            <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('config_reset_description')}
            </p>
            <Button
              onClick={handleResetToDefaults}
              className={`flex items-center space-x-2 rounded-md px-4 py-2 ${
                isDarkMode ? 'bg-red-700 text-white hover:bg-red-600' : 'bg-red-500 text-white hover:bg-red-600'
              }`}>
              <FiRefreshCw className="h-4 w-4" />
              <span>{t('config_reset_button')}</span>
            </Button>
          </div>

          {importStatus && (
            <div
              className={`rounded-md p-4 ${
                importStatus.type === 'success'
                  ? isDarkMode
                    ? 'bg-green-900/30 text-green-400'
                    : 'bg-green-100 text-green-800'
                  : isDarkMode
                    ? 'bg-red-900/30 text-red-400'
                    : 'bg-red-100 text-red-800'
              }`}>
              {importStatus.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConfigSettings;
