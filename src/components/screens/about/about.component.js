import { BaseScreen } from '@/core/component/base-screen.component'

export class About extends BaseScreen {
	constructor() {
		super({ title: 'About' })
	}
	render() {
		return '<p>About</p>'
	}
}
