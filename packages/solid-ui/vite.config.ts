import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid(), vanillaExtractPlugin(), externalizeDeps(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    }
  }
})
