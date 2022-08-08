const getHomePage = `#graphql
	query {
		getPage(by: {role: homePage}) {
			id
			slug
		}
	}
`

export default getHomePage
