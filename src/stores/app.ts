export const useAppStore = defineStore('oiyo-app', () => {
  const title = ref('oiyo-wot-starter')

  return { title }
}, {
  persist: {
    enabled: true,
  },
})
