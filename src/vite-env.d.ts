/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_GRAPHQL_URI: string,
  readonly VITE_API_GRAPHQL__WS_URI: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv,
}
