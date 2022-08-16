import { useCallback, useState } from 'react';
import { clientSideFetch } from '../lib/graphql/gqlfetch';
import createRecord from '../lib/graphql/mutations/createRecord';

export default function AddRecordForm(props: any) {
    const listUser = props.listUser

    const [setSubmitState] = useState<any>(null)


    const submitForm = useCallback(async (event, data) => {
        const { errors, data: submitData } = await clientSideFetch(createRecord(data.userId as string))
        if (errors) {
            console.error(errors)
        } else {
            event.target.reset();
        }
    }, [])

    const onSubmit = useCallback((event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
    }, [submitForm])


    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="userId">
                        Vyber uživatele:
                    </label>
                    <select name="userId" id="userSelect">
                        <option value="">--Vyber možnost--</option>
                        {listUser.map(user => (
                            <option key={user.id} value={user.id}>{user.nickname}</option>
                        ))
                        }
                    </select>
                </div>
                <div>
                    <button type="submit">Přidej!</button>
                </div>
            </form>
        </>
    )
}

