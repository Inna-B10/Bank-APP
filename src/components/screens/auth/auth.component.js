import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'
import { Button } from '@/components/ui/button/button.component'
import { Field } from '@/components/ui/field/field.component'
import { AuthService } from '@/api/auth.service'
import styles from './auth.module.scss'
import template from './auth.template.html'

export class Auth extends BaseScreen {
	#isTypeLogin = true

	constructor() {
		super({ title: 'Auth' })
		this.authService = new AuthService()
	}

	#handleSubmit = event => {
		console.log(event.target)
	}

	#changeFormType = event => {
		event.preventDefault()

		$R(this.element)
			.find('h1')
			.text(this.#isTypeLogin ? 'Register' : 'Sign In')

		$R(event.target).text(this.#isTypeLogin ? 'Sign In' : 'Register')

		this.#isTypeLogin = !this.#isTypeLogin
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new Button({
					children: 'Submit'
				})
			],
			styles
		)

		$R(this.element)
			.find('#auth-inputs')
			.append(
				new Field({
					name: 'email',
					placeholder: 'Email',
					type: 'email'
				}).render()
			)
			.append(
				new Field({
					name: 'password',
					placeholder: 'Password',
					type: 'password'
				}).render()
			)

		$R(this.element).find('#change-form-type').click(this.#changeFormType)

		$R(this.element).find('form').submit(this.#handleSubmit)

		return this.element
	}
}
