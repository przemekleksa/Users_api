import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '../components/List/List'
import { getPeople, resetPeople } from '../store/people/actions'
import { selectIsLoadingPeople, selectIsRejectedPeople, selectIsResetPeople, selectPeople } from '../store/people/selectors'
import './Screens.css'

const People = () => {
    const dispatch = useDispatch()
    const people = useSelector(selectPeople)
    const isLoading = useSelector(selectIsLoadingPeople)
    const rejected = useSelector(selectIsRejectedPeople)
    const reset = useSelector(selectIsResetPeople)

    useEffect(() => {
        dispatch(getPeople())
    }, [dispatch])

    const handleReset = () => {
        dispatch(resetPeople())
    }

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {rejected && <p>unable to fetch</p>}
            {!reset && !isLoading && !rejected && <button onClick={handleReset}>Reset people</button>} 
            <List elements={people}/>
        </div>
    )
}

export default People