import type { ToastOptions } from '@wot-ui/ui/components/wd-toast/types'

const defaultOptions: ToastOptions = {
  show: false,
}

/**
 * 全局加载提示控制器
 */
export function createGlobalLoading() {
  const loadingOptions = ref<ToastOptions>({ ...defaultOptions })
  const currentPage = ref('')

  function loading(option: ToastOptions | string) {
    currentPage.value = getCurrentPath()
    loadingOptions.value = CommonUtil.deepMerge({
      iconName: 'loading',
      duration: 0,
      cover: true,
      position: 'middle',
      show: true,
    }, typeof option === 'string' ? { msg: option } : option) as ToastOptions
  }

  function close() {
    loadingOptions.value = { ...defaultOptions }
    currentPage.value = ''
  }

  return {
    loadingOptions,
    currentPage,
    loading,
    close,
  }
}

export type GlobalLoading = ReturnType<typeof createGlobalLoading>
