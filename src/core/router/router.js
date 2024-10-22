import { NotFound } from '@/components/screens/not-found/not-found.component'
import { ROUTES } from './routes.data'

export class Router {
	#routes
	#currentRoute

	constructor() {
		this.#routes = ROUTES
		this.#currentRoute = null
		this.#handleRouteChange()
	}

	getCurrentPath() {
		const base = import.meta.env.BASE_URL // Получаем базовый путь из конфигурации Vite
		const pathname = window.location.pathname // Текущий путь в браузере
		return pathname.replace(base, '/') || '/' // Убираем базовый путь
	}
	#handleRouteChange() {
		const path = this.getCurrentPath()
		console.log(path)

		let route = this.#routes.find(route => route.path === path)

		if (!route) {
			route = {
				component: NotFound
			}
		}
		this.#currentRoute = route
		this.render()
	}
	render() {
		const component = new this.#currentRoute.component()
		document.getElementById('app').innerHTML = component.render()
	}
}
