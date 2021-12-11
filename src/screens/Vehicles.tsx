import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List/List";
import { getVehicles } from "../store/vehicles/actions";
import { selectVehicles } from "../store/vehicles/selectors";




const Vehicles = () => {
    const dispatch = useDispatch()
    const vehicles = useSelector(selectVehicles)

    useEffect(() => {
        dispatch(getVehicles())
    }, [dispatch]);

    return (
        <div>
            <List elements={vehicles}/>
        </div>
    )
}

export default Vehicles