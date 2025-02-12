/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: "Portfolio PC",
    readonly VITE_HF_ACCESS_TOKEN: "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",
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }