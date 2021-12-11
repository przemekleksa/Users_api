import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List/List";
import { getPlanets } from "../store/planets/actions";
import { selectPlanets } from "../store/planets/selectors";



const Planets = () => {
    const dispatch = useDispatch()
    const planets = useSelector(selectPlanets)

    useEffect(() => {
        dispatch(getPlanets())
    }, [dispatch]);

    return (
        <div>
            <List elements={planets}/>
        </div>
    )
}

export default Planets