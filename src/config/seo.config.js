const SITE_NAME = 'Obsidian Bank'

export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}
