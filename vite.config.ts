import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// npm i -D @types/node 可以方式path引入报红
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    // 这里的配置可以使用 @ 代表 src目录
    alias:{
      "@":path.resolve(__dirname,'src')
    }
  }
})
