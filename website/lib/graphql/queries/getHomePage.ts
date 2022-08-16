const getHomePage = `#graphql
	query {
		listUser{
			id
			firstname
			surname
			nickname
		  }

		  listRecords(orderBy: [{lastIn: desc}]){
			id
			lastIn
			user{
			  nickname
			}
		  }
	}
`
export default getHomePage
