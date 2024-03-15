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
        '@cookies': resolve(__dirname, './src/cookies/'),
        '@webcomponents': resolve(__dirname, './src/webcomponents/'),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, './src/index'),
        name: 'Cookies',
        fileName: 'vg-cookies',
        formats: [ 'es' ]
      }
    }
  }
})