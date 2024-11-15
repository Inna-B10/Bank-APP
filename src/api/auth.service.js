import { obQuery } from '@/core/ob-query/ob-query.lib'
import { NotificationService } from '@/core/services/notification.service'

export class AuthService {
	#BASE_URL = './auth'

	constructor() {
		//store
		this.notificationService = new NotificationService()
	}

	main(type, body) {
		return obQuery({
			path: `${this.#BASE_URL}/${type}`,
			body,
			onSuccess: data => {
				//login store
				this.notificationService.show(
					'success',
					'You have successfully logged in!'
				)
			},
			method: 'POST'
		})
	}
}
