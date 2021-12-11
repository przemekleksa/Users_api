import Axios from "../utils/axios"

export const getFilmsRequest = (): any => {
    return Axios.get('films')
}

export const getFilmDetailsRequest = (id: string): any => {
    return Axios.get('films/' + id)
}