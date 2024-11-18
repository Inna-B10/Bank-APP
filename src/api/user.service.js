import { obQuery } from '@/core/ob-query/ob-query.lib'

export class UserService {
	#BASE_URL = './users'

	getAll(searchTerm, onSuccess) {
		return obQuery({
			path: `${this.#BASE_URL}
      ${searchTerm ? `?${new URLSearchParams({ searchTerm })}` : ''}`,
			onSuccess
		})
	}
}
