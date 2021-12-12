import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '../components/List/List'
import { NewUser } from '../interfaces/Users'
import { getUsers, resetUsers, postUser } from '../store/people/actions'
import { selectIsLoadingUsers, selectIsRejectedUsers, selectIsResetUsers, selectUsers } from '../store/people/selectors'
import './Screens.css'

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)
    const isLoading = useSelector(selectIsLoadingUsers)
    const rejected = useSelector(selectIsRejectedUsers)
    const reset = useSelector(selectIsResetUsers)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const handleReset = () => {
        dispatch(resetUsers())
    }

    const handleAddUser = () => {
        const newUser: NewUser = {
            name: 'Big Boss',
            email: 'bigboss' + Math.random() + '@edu.pl',
            gender: 'female',
            status: 'active'
        }
        console.log(newUser)
        dispatch(postUser(newUser))
    }

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {rejected && <p>unable to fetch</p>}
            {!reset && !isLoading && !rejected && <button onClick={handleReset}>Reset people</button>} 
            {!reset && !isLoading && !rejected && <button onClick={handleAddUser}>add User</button>}
            <List elements={users}/>
        </div>
    )
}

export default Users