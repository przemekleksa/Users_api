import { createReducer } from "@reduxjs/toolkit"
import { getPlanetDetails, getPlanets } from "./actions"

const initState = {
    planets: [],
    isLoading: false,
    planetDetails: {},
    errorInfo: ''
}

export const planetReducer = createReducer(initState, builder => {
    builder
        .addCase(getPlanets.pending, state => {
            state.isLoading = true;
        })
        .addCase(getPlanets.fulfilled, (state, { payload } ) => {
            state.isLoading = false;
            state.planets = payload.data.results
        })
        .addCase(getPlanets.rejected, state =>{
            state.isLoading = false;
            state.errorInfo = 'unable to fetch data'
        })
        .addCase(getPlanetDetails.pending, state => {
            state.isLoading = true;
        })
        .addCase(getPlanetDetails.fulfilled, (state, {payload: {data}}) => {
            state.isLoading = false;
            state.planetDetails = data
        })
        .addCase(getPlanetDetails.rejected, state => {
            state.isLoading = false;
            state.errorInfo = 'unable to fetch data'
        })
})