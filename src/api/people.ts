import Axios from "../utils/axios"

export const getPeopleRequest = (): any => {
    return Axios.get('people')
}

export const getPersonDetailsRequest = (id:string): any => {
    return Axios.get('people/'+id)
}