import { defineOiyoConfig } from '@skiyee/oiyo/config'

// https://oiyo.js.org/docs/api/config/define-oiyo-config
export default defineOiyoConfig({
  scan: {
    components: [
      '@wot-ui/ui/components/**/*.vue',
    ],
    apis: [
      'utils/*.ts',
      'pinia',
      'stores/*.ts',
      'api/*.ts',
      'alova/client',
      { from: '@wot-ui/ui', types: true },
      {
        from: '@wot-ui/router',
        only: ['createRouter', 'useRouter', 'useRoute'],
      },
    ],
  },
})
