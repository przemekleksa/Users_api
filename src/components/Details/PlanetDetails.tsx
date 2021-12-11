import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPlanetDetails } from '../../store/planets/actions'
import { selectPlanetDetails } from '../../store/planets/selectors'

export const PlanetDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const planet = useSelector(selectPlanetDetails)

    useEffect(() => {
        if (id) {
            dispatch(getPlanetDetails(id))
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
        <div className="planet">
            <h2>{planet.name}</h2>
            {/* jak zwracac liste? */}
            {/* <p>{planet.films.map(film => {
                return {film: any}
            })}</p> */} 
            <p>Population: {planet.population}</p>
        </div>
    )
}