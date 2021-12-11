import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPersonDetails } from '../../store/people/actions'
import { selectPerson } from '../../store/people/selectors'


const PersonDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const person = useSelector(selectPerson)
    
    useEffect(() => {
        if (id) {
            dispatch(getPersonDetails(id))
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

export default PersonDetails