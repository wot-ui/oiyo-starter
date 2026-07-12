import type { ThemeColorOption, ThemeMode, ThemeState } from '~/types/theme'

import { defineStore } from 'pinia'

function buildThemeVars(color: ThemeColorOption) {
  return {
    ...color.primaryShades,
  }
}

function resolveSystemTheme(): ThemeMode {
  try {
    // #ifdef MP-WEIXIN
    const appBaseInfo = uni.getAppBaseInfo()
    if (appBaseInfo?.theme) {
      return appBaseInfo.theme as ThemeMode
    }
    // #endif

    // #ifndef MP-WEIXIN
    const systemInfo = uni.getSystemInfoSync()
    if (systemInfo?.theme) {
      return systemInfo.theme as ThemeMode
    }
    // #endif
  }
  catch (error) {
    console.warn('Failed to resolve system theme:', error)
  }
  return 'light'
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    theme: 'light',
    followSystem: true,
    hasUserSet: false,
    currentThemeColor: CommonUtil.deepMerge(defaultThemeColor, {}),
    themeVars: buildThemeVars(defaultThemeColor),
  }),

  getters: {
    isDark: state => state.theme === 'dark',
  },

  persist: {
    paths: ['theme', 'followSystem', 'hasUserSet', 'currentThemeColor'],
  },

  actions: {
    /** Toggle or set theme mode. When followSystem is true, skip marking as user override. */
    toggleTheme(mode?: ThemeMode, followSystem = false) {
      this.theme = mode || (this.theme === 'light' ? 'dark' : 'light')
      if (!followSystem) {
        this.hasUserSet = true
        this.followSystem = false
      }
      this.syncNavigationBar()
    },

    setFollowSystem(follow: boolean) {
      this.followSystem = follow
      if (follow) {
        this.hasUserSet = false
        this.initTheme()
      }
    },

    syncNavigationBar() {
      uni.setNavigationBarColor({
        frontColor: this.theme === 'light' ? '#000000' : '#ffffff',
        backgroundColor: this.theme === 'light' ? '#ffffff' : '#000000',
      })
    },

    setThemeColor(color: ThemeColorOption) {
      this.currentThemeColor = CommonUtil.deepMerge(color, {})
      this.themeVars = {
        ...this.themeVars,
        ...buildThemeVars(color),
      }
    },

    initTheme() {
      this.themeVars = buildThemeVars(this.currentThemeColor)

      if (this.hasUserSet && !this.followSystem) {
        this.syncNavigationBar()
        return
      }

      if (!this.hasUserSet || this.followSystem) {
        this.theme = resolveSystemTheme()
        if (!this.hasUserSet) {
          this.followSystem = true
        }
      }

      this.syncNavigationBar()
    },
  },
})

export type ThemeStore = ReturnType<typeof useThemeStore>
