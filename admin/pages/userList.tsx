import { DataGridPage, DeleteEntityButton, GenericCell, Link, LinkButton, TextCell } from "@contember/admin";
import * as React from "react";

export default () => (
    <DataGridPage
        entities="User"
        itemsPerPage={50}
        rendererProps={{
            title: "User",
            actions: <LinkButton to="userCreate">Add user</LinkButton>,
        }}
    >
        <TextCell
            field="firstname"
            header="User's first name"
            format={(scalar) => <Link to="userEdit(id: $entity.id)">{scalar}</Link>}

        />
        <TextCell
            field="surname"
            header="User's surname"
        />

        <TextCell
            field="nickname"
            header="User's nickame"
        />


        <GenericCell>
            <DeleteEntityButton immediatePersist />
        </GenericCell>
    </DataGridPage>
)
