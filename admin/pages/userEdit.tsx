import { EditPage } from "@contember/admin";
import * as React from "react";
import { UserForm } from '../forms/userForms';

export default () => (
    <EditPage entity="User(id=$id)" rendererProps={{ title: "Edit user" }}>
        <UserForm />
    </EditPage>
)   