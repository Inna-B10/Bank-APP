import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'
import { Button } from '@/components/ui/button/button.component'
import styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}
	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Button({
					children: 'Send',
					onClick: () => alert('Hei'),
					variant: 'green'
				})
			],
			styles
		)
		$R(element).find('h1').css('color', 'blue')
		return element
	}
}
