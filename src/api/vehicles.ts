import Axios from "../utils/axios"

export const getVehiclesRequest = (): any => {
    return Axios.get('vehicles')
}

export const getVehicleDetailsRequest = (id: string): any => {
    return Axios.get(`vehicles/${id}`)
}