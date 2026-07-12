import type { ToastOptions } from '@wot-ui/ui/components/wd-toast/types'

const defaultOptions: ToastOptions = {
  duration: 2000,
  show: false,
}

/**
 * 全局轻提示控制器
 */
export function createGlobalToast() {
  const toastOptions = ref<ToastOptions>({ ...defaultOptions })
  const currentPage = ref('')

  function show(option: ToastOptions | string) {
    currentPage.value = getCurrentPath()
    const options = CommonUtil.deepMerge(
      defaultOptions,
      typeof option === 'string' ? { msg: option } : option,
    ) as ToastOptions
    toastOptions.value = CommonUtil.deepMerge(options, {
      show: true,
      position: options.position || 'middle',
    }) as ToastOptions
  }

  function success(option: ToastOptions | string) {
    show(CommonUtil.deepMerge({
      iconName: 'success',
      duration: 1500,
    }, typeof option === 'string' ? { msg: option } : option) as ToastOptions)
  }

  function error(option: ToastOptions | string) {
    show(CommonUtil.deepMerge({
      iconName: 'error',
      direction: 'vertical',
    }, typeof option === 'string' ? { msg: option } : option) as ToastOptions)
  }

  function info(option: ToastOptions | string) {
    show(CommonUtil.deepMerge({
      iconName: 'info',
    }, typeof option === 'string' ? { msg: option } : option) as ToastOptions)
  }

  function warning(option: ToastOptions | string) {
    show(CommonUtil.deepMerge({
      iconName: 'warning',
    }, typeof option === 'string' ? { msg: option } : option) as ToastOptions)
  }

  function close() {
    toastOptions.value = { ...defaultOptions }
    currentPage.value = ''
  }

  return {
    toastOptions,
    currentPage,
    show,
    success,
    error,
    info,
    warning,
    close,
  }
}

export type GlobalToast = ReturnType<typeof createGlobalToast>
