/*
 * @Author: weisheng
 * @Date: 2025-09-25 20:32:22
 * @LastEditTime: 2026-04-07 14:06:20
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /wot-starter/src/composables/useGlobalLoading.ts
 * 记得注释
 */
import type { ToastOptions } from '@wot-ui/ui/components/wd-toast/types'

import { defineStore } from 'pinia'

interface GlobalLoading {
  loadingOptions: ToastOptions;
  currentPage: string;
}

const defaultOptions: ToastOptions = {
  show: false,
}
export const useGlobalLoading = defineStore('global-loading', {
  state: (): GlobalLoading => ({
    loadingOptions: defaultOptions,
    currentPage: '',
  }),
  getters: {},
  actions: {
    // 加载提示
    loading(option: ToastOptions | string) {
      this.currentPage = getCurrentPath()
      this.loadingOptions = CommonUtil.deepMerge({
        iconName: 'loading',
        duration: 0,
        cover: true,
        position: 'middle',
        show: true,
      }, typeof option === 'string' ? { msg: option } : option) as ToastOptions
    },
    // 关闭Toast
    close() {
      this.loadingOptions = defaultOptions
      this.currentPage = ''
    },
  },
})
