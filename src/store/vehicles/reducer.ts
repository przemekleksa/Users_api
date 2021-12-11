import { createReducer } from "@reduxjs/toolkit"
import { getVehicleDetails, getVehicles } from "./actions"

const initState = {
    vehicles: [],
    isLoading: false,
    vehicleDetails: {},
    errorInfo: ''
}

export const vehiclesReducer = createReducer(initState, builder => {
    builder
        .addCase(getVehicles.pending, state => {
            state.isLoading = true
        })
        .addCase(getVehicles.fulfilled, (state, { payload } ) => {
            state.isLoading = false
            state.vehicles = payload.data.results
        })
        .addCase(getVehicles.rejected, state => {
            state.isLoading = false;
            state.errorInfo = 'unable to fetch data'
        })
        .addCase(getVehicleDetails.pending, state => {
            state.isLoading = true
        })
        .addCase(getVehicleDetails.fulfilled, (state, { payload: { data } } ) => {
            state.isLoading = false
            state.vehicleDetails = data
        })
        .addCase(getVehicleDetails.rejected, state => {
            state.isLoading = false
            state.errorInfo = 'unable to fetch data'
        })
})