import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or "modern", "legacy"
			}
		}
	},
	base: '/bank-js-intensive/'
})
