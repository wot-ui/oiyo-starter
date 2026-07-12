export const useAppStore = defineStore('oiyo-app', () => {
  const title = ref('oiyo-starter')

  return { title }
}, {
  persist: {
    enabled: true,
  },
})
