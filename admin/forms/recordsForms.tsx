import { Component, DateTimeField, SelectField } from '@contember/admin'
import * as React from 'react'

type RecordsFormProps = {
    field: string
    labelUser: string
}

export const RecordsForm = Component<RecordsFormProps>(
    ({ labelUser, field }) => (
        <>
            {/* <HasOne field={field}> */}
            <SelectField field={field} label={labelUser} options="User.nickname" />
            {/* </HasOne> */}
        </>
    ),
    'RecordsForm',
)

export const RecordsSideForm = Component(
    () => (
        <>
            <DateTimeField
                field="records.lastIn"
                label={'Record has been created.'}
                defaultValue={new Date().toISOString()}
            />
        </>
    ),
    'RecordsSideForm',
)