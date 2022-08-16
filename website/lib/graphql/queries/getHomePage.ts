const getHomePage = `#graphql
	query {
		listUser{
			id
			firstname
			surname
			nickname
		  }

		  listRecords{
			id
			lastIn
			user{
			  nickname
			}
		  }
	}
`
export default getHomePage
