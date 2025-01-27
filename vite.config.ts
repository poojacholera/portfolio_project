import { defineConfig,loadEnv } from 'vite'
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

// https://vite.dev/config/
dotenv.config();
export default defineConfig(
  {
  plugins: [react()],
  envDir: './env'
})
