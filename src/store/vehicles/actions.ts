import { createAsyncThunk } from "@reduxjs/toolkit"
import { getVehiclesRequest, getVehicleDetailsRequest } from "../../api/vehicles"

export const getVehicles = createAsyncThunk('vehicles/getVehicles', () => {
    return getVehiclesRequest()
})

export const getVehicleDetails = createAsyncThunk('vehicles/getVehicleDetails', (id: string) => {
    return getVehicleDetailsRequest(id)
})