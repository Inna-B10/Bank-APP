/**
 * Formats a date in the "MMM DD, YYYY" format.
 * @param {string} dateString -The date string inthe format "YYYY-MM-DDTHH:mm:ss.sssZ"
 * @returns {string} The formatted date string inthe format "MMM DD, YYYY".
 */
export function formatDate(dateString) {
	const date = new Date(dateString)
	const options = { month: 'short', day: 'numeric', year: 'numeric' }
	return date.toLocaleDateString('en-US', options)
}
