import Axios from "../utils/axios"

export const getPlanetsRequest = (): any => {
    return Axios.get('planets') // tu moze byc pelen url jezeli w fetch bedzie pusty strong zamiast url
}; 

export const getPlanetDetailsRequest = (id:string): any => {
    return Axios.get('planets/'+id)
}