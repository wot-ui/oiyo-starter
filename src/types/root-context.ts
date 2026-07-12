import type { ConfigProviderProps } from '@wot-ui/ui/components/wd-config-provider/types'

import type { GlobalDialog } from '../utils/createGlobalDialog'
import type { GlobalLoading } from '../utils/createGlobalLoading'
import type { GlobalToast } from '../utils/createGlobalToast'
import type { ThemeStore } from '~/stores/theme'

export interface RootContext {
  buttonConfig: ConfigProviderProps['button'];
  theme: ThemeStore;
  toast: GlobalToast;
  loading: GlobalLoading;
  dialog: GlobalDialog;
}
