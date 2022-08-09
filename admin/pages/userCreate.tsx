import { CreatePage } from "@contember/admin";
import * as React from "react";
import { UserForm } from '../forms/userForms';

export default () => (
    <CreatePage
        entity="User"
        rendererProps={{ title: "Add user" }}
        redirectOnSuccess="userList(id: $entity.id)">
        <UserForm />
    </CreatePage>
)

// import { useRedirect } from '@contember/admin'
// import { useEffect } from 'react'

// export default () => {
// 	const redirect = useRedirect()
// 	useEffect(() => redirect('pageList'), [redirect])
// 	return null
// }

