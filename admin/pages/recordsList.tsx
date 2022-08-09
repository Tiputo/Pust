import { DataGridPage, DateCell, DeleteEntityButton, GenericCell, Link, LinkButton, TextCell } from "@contember/admin";
import * as React from "react";

export default () => (
    <DataGridPage
        entities="Records"
        itemsPerPage={50}
        rendererProps={{
            title: "Records",
            actions: <LinkButton to="recordsCreate">Add a record</LinkButton>,
        }}
    >
        <TextCell
            field="user.nickname"
            header="User's nickname"
            format={(scalar) => <Link to="userEdit(id: $entity.id)">{scalar}</Link>}
        />

        <DateCell field="lastIn" header={'Last time fasted'} />


        <GenericCell>
            <DeleteEntityButton immediatePersist />
        </GenericCell>

    </DataGridPage>
)
