import { Component, TextField } from '@contember/admin'
import * as React from 'react'


export const UserForm = Component(
    () => (
        <>
            <TextField field="firstname" label="user's firstname" />
            <TextField field="surname" label="user's surname" />
            <TextField field="nickname" label="user's nickname" />

        </>
    )
)
