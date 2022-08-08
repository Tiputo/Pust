import { DataGridPage, DeleteEntityButton, GenericCell, LinkButton } from "@contember/admin";
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

        <GenericCell>
            <DeleteEntityButton immediatePersist />
        </GenericCell>
    </DataGridPage>
)
