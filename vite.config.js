import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or "modern", "legacy"
			}
		}
	},
	//plugins: [react()],
	base: '/bank-js-intensive/'
})
