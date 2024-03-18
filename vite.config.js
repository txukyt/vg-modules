// vite.config.js
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@cookies': resolve(__dirname, './src/components/cookies'),
        '@services': resolve(__dirname, './src/services'),
      },
    },
    build: {
        lib: {
          entry: resolve(__dirname, './src/index'),
          name: 'Modules',
          fileName: 'vg-cookies',
          formats: [ 'es', 'umd' ]
        },
    }
  }
})