import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserDetails } from '../../store/people/actions'
import { selectUser } from '../../store/people/selectors'

const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const person = useSelector(selectUser)
    
    useEffect(() => { 
        if (id) {
            dispatch(getUserDetails(id))
        }
    }, [id, dispatch])

    if (!id) {
        return (
            <div>
                there is no id
            </div>
        )
    }
    
    return (
        <div className="details">
        <h2>{person.name}</h2>
        <p>Mass: {person.mass} kg</p>
        <p>Hair color: {person.hair_color}</p>
        </div>
    )
}

export default Details