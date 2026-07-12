<script setup lang="ts">
import type { RootContext } from '~/types/root-context'

/**
 * 全局根部上下文
 * @see https://oiyo.js.org/docs/manual/shell/root-context
 */
const { theme, buttonConfig, toast, loading, dialog } = defineRootContext<RootContext>(() => {
  const buttonConfig = {
    size: 'large',
  } as const

  const theme = useThemeStore()
  const toast = createGlobalToast()
  const loading = createGlobalLoading()
  const dialog = createGlobalDialog()

  return {
    theme,
    buttonConfig,
    toast,
    loading,
    dialog,
  }
})

onLaunch(() => {
  if (typeof uni !== 'undefined' && uni.onThemeChange) {
    const themeChangeHandler: UniNamespace.OnThemeChangeCallback = (res) => {
      if (theme.followSystem && res.theme) {
        theme.toggleTheme(res.theme, true)
      }
    }

    uni.onThemeChange(themeChangeHandler)
  }
})

const toastHost = useToast('global')
const dialogHost = useDialog('global')

watch(
  toast.toastOptions,
  (options) => {
    options.show ? toastHost.show(options) : toastHost.close()
  },
  { deep: true },
)

watch(
  loading.loadingOptions,
  (options) => {
    options.show ? toastHost.show(options) : toastHost.close()
  },
  { deep: true },
)

watch(
  dialog.dialogOptions,
  (options) => {
    if (!options) {
      dialogHost.close()
      return
    }

    const { success, fail, ...dialogOptions } = options
    dialogHost.show(dialogOptions)
      .then(res => success?.(res))
      .catch(res => fail?.(res))
      .finally(() => dialog.close())
  },
  { deep: true },
)
</script>

<template>
  <WdConfigProvider
    :theme-vars="theme.themeVars"
    :theme="theme.theme"
    :button="buttonConfig"
    :custom-class="`page-wrapper ${theme}`"
  >
    <!-- @see https://oiyo.js.org/docs/manual/shell/app-shell -->
    <OiyoLayout>
      <OiyoPage />
    </OiyoLayout>

    <WdNotify />
    <WdDialog selector="global" />
    <WdToast selector="global" />
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
