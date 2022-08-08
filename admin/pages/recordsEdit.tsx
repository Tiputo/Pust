import { Box, EditPage } from "@contember/admin";
import * as React from "react";
import { RecordsForm, RecordsSideForm } from "../forms/recordsForms";

export default () => (
    <EditPage entity="Records(id=$id)" rendererProps={{ title: "Edit a record", side: <RecordsSideForm /> }}>
        <Box heading="Recordings">
            <RecordsForm field="user.nickname" labelUser="Choose an user" />
        </Box>
    </EditPage>
)