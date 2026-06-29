import { presetWot } from '@wot-ui/unocss-preset'
import {
  defineConfig,
  presetUni,
  transformerDirectives,
  transformerVariantGroup,
} from 'uni-unocss'
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUni(),
    presetWot(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
