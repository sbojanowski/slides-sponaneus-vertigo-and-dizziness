import { defineConfig } from 'vite'
import { sub } from '@mdit/plugin-sub'
import Mark from 'markdown-it-mark'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(sub)
        md.use(Mark)
      },
    },
  },
  zoom: "0.95"
})