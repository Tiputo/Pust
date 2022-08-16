import { useCallback } from 'react';
import { clientSideFetch } from '../lib/graphql/gqlfetch';
import createRecord from '../lib/graphql/mutations/createRecord';

export default function AddRecordForm(props: any) {
    const listUser = props.listUser

    const onSubmit = useCallback(async (event) => {
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const { errors, data: submitData } = await clientSideFetch(createRecord(data.userId as string))
        event.preventDefault()
    }, [])

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

