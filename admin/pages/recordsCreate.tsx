import { Box, CreatePage } from "@contember/admin";
import * as React from "react";
import { RecordsForm } from "../forms/recordsForms";

export default () => (
    <CreatePage
        entity="Records"
        redirectOnSuccess="recordsList(id: $entity.id)">
        <Box heading="Records">
            <RecordsForm field="user" labelUser="Choose a user" />
        </Box>
        {/* <SelectField field="user" label="User" options="User.nickname" /> */}
    </CreatePage>
)
