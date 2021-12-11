import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import List from "../components/List/List"
import { getFilms } from "../store/films/actions"
import { selectFilms } from "../store/films/selectors"

const Films = () => {
    const dispatch = useDispatch()
    const films = useSelector(selectFilms)
    
    useEffect(() => {
        dispatch(getFilms())
    }, [dispatch])

    return (
        <div>   
            <List elements={films} />
        </div>
    )
}

export default Films