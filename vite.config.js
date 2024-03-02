import { fileURLToPath, URL } from 'node:url'

// 添加ElementPlus到项目（按需导入）
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        //1.配置elementsPlus采用sass样式的配色系统
        ElementPlusResolver({importStyle: "sass"}),
      ],
    }),
  ],
  resolve: {
    alias: {
      // 这里才起到了实质性的路径转换
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        //自动导入定制化样式文件进行覆盖
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  }
})
