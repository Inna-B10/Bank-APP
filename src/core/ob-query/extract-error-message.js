export function extractErrorMessage(errorData) {
	return typeof errorData === 'object'
		? errorData.message[0]
		: errorData.message
}
