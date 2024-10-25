import path from 'path'
import { defineConfig } from 'vite'
import string from 'vite-plugin-string'

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
	plugins: [
		string({
			include: '**/*.html'
		})
	],
	base: '/bank-js-intensive/'
})
