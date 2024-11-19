import { obQuery } from '@/core/ob-query/ob-query.lib'

export class TransactionService {
	#BASE_URL = '/transactions'

	getAll(onSuccess) {
		return obQuery({
			path: this.#BASE_URL + `?${new URLSearchParams({ orderBy: 'desc' })}`,
			onSuccess
		})
	}
}
