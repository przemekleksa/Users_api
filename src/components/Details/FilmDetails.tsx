import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getFilmDetails } from '../../store/films/actions'
import { selectFilmDetails } from '../../store/films/selectors'
import './FilmDetails.css'

export const FilmDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const film = useSelector(selectFilmDetails)

    const changeNumArabicRoman = (num: number) => {
        let roman = ''
        console.log(num)
        switch(num){
            case 1:
                return roman  = 'I'
            case 2:
                return roman = 'II'
            case 3:
                return roman = 'III'
            case 4:
                return roman = 'IV'
            case 5:
                return roman = 'V'
            case 6:
                return roman = 'VI'
            case 7:
                return roman = 'VII'
            case 8:
                return roman = 'VIII'
            case 9:
                return roman = 'IX'
            default:
                return roman = 'num is not supported'
        }
    }

    useEffect(() => {
       if(id) {
           dispatch(getFilmDetails(id))
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
        <div className="all-films">
            <div className="fade"></div>
            <div className="films">
                <div className="crawl">
                    <p>Episode: {changeNumArabicRoman(film.episode_id)}</p>
                    <h2>{film.title}</h2>
                    {/* <p>Episode: <span>{film.episode_id}</span> Director: <span>{film.director}</span> Release Date: <span>{film.release_date}</span></p> */}
                    <p>{film.opening_crawl}</p>
                </div>
            </div> 
        </div>

    )
}