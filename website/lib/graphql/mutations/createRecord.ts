const createRecord = (userId: string) => {
    return `#graphql
    mutation {
        createRecords(data: {
          user: {
            connect: { id: "${userId}" }
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