import { Layout } from '@/components/layout/layout.component'
import { NotFound } from '@/components/screens/not-found/not-found.component'
import { $R } from '../rquery/rquery.lib'
import { ROUTES } from './routes.data'

export class Router {
	#routes
	#currentRoute
	#layout = null

	constructor() {
		this.#routes = ROUTES
		this.#currentRoute = null
		this.#handleRouteChange()
		this.#handleLinks()
		//buttons back, forward
		window.addEventListener('popstate', () => {
			this.#handleRouteChange()
		})
	}

	#handleLinks() {
		document.addEventListener('click', event => {
			const target = event.target.closest('a')

			if (target) {
				event.preventDefault()
				this.navigate(target.href)
			}
		})
	}

	getCurrentPath() {
		const base = import.meta.env.BASE_URL // Получаем базовый путь из конфигурации Vite
		const pathname = window.location.pathname // Текущий путь в браузере
		return pathname.replace(base, '/') || '/' // Убираем базовый путь
	}

	navigate(path) {
		if (path !== this.getCurrentPath()) {
			window.history.pushState({}, '', path)
			this.#handleRouteChange()
		}
	}

	#handleRouteChange() {
		const path = this.getCurrentPath()

		let route = this.#routes.find(route => route.path === path)

		if (!route) {
			route = {
				component: NotFound
			}
		}
		this.#currentRoute = route
		this.#render()
	}
	#render() {
		const component = new this.#currentRoute.component().render()

		if (!this.#layout) {
			this.#layout = new Layout({
				router: this,
				children: component
			}).render()

			$R('#app').append(this.#layout)
		} else {
			$R('#content').html('').append(component)
		}
	}
}
