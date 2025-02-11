import { defineConfig, loadEnv } from 'vite'

import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

// https://vite.dev/config/
dotenv.config();
export default defineConfig(({mode})=>{

  const env = loadEnv(mode,"./env","" )
  return {
    plugins: [react()],
    envDir: './env',
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
   
    distDir: "dist",
  }
}
 )
