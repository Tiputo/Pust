const getHomePage = `#graphql
	query {
		listUser{
			id
			firstname
			surname
			nickname
		  }
	}
`
export default getHomePage
