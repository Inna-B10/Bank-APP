import { obQuery } from '@/core/ob-query/ob-query.lib'

export class StatisticService {
	#BASE_URL = './statistics'

	main(onSuccess) {
		return obQuery({
			path: this.#BASE_URL,
			onSuccess
		})
	}
}
