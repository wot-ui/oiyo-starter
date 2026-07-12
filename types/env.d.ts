interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_ENV_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
