<script setup lang="ts">
import type { ConfigProviderProps } from '@wot-ui/ui/components/wd-config-provider/types'

const { themeVars, theme, buttonConfig } = defineRootContext(() => {
  const { themeVars, theme } = useManualTheme()

  const buttonConfig: ConfigProviderProps['button'] = {
    size: 'large',
  }

  return {
    themeVars,
    theme,
    buttonConfig,
  }
})
</script>

<template>
  <WdConfigProvider :theme-vars="themeVars" :theme="theme" :button="buttonConfig" :custom-class="`page-wrapper ${theme}`">
    <OiyoLayout>
      <OiyoPage />
    </OiyoLayout>
    <WdNotify />
    <WdDialog />
    <WdToast />
  </WdConfigProvider>
</template>

<style lang="scss">
@use '@wot-ui/ui/styles/theme/index.scss' as *;

.page-wrapper {
  min-height: calc(100vh - var(--window-top));
  box-sizing: border-box;
  background: var(--wot-filled-content);
}
</style>
