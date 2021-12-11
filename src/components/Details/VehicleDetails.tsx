import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVehicleDetails } from '../../store/vehicles/actions'
import { selectVehicleDetails } from '../../store/vehicles/selectors'

export const VehicleDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const vehicle = useSelector(selectVehicleDetails)

    useEffect(() => {
        if (id) {
            dispatch(getVehicleDetails(id))
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
        <div className="vehicles">
            <h2>{vehicle.name}</h2>
            <p className="model">{vehicle.model}</p>
            <p className="manufacturer">Made by: {vehicle.manufacturer}</p>
            {/* <p>{vehicle && vehicle.films.map((film: any) => {
                return (
                    <p>{film}</p>
                ) 
                })}</p> */}
        </div>
    )
}