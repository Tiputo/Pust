const createRecord = (userId: string) => {
    return `#graphql
    mutation {
        createRecords(data: {
          user: {
            create: {
              nickname: { connect: { id: "${userId}" } }
            }   
          }
        })
        {
          ok
          errorMessage
        }
      }
    
    `
}

export default createRecord