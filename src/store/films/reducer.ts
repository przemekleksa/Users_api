import { createReducer } from "@reduxjs/toolkit"
import { getFilmDetails, getFilms } from "./actions"

const initState = {
    films: [],
    isLoading: false,
    page: 1,
    detailedMovie: {},
    errorInfo: ''
}

export const filmsReducer = createReducer(initState, builder => {
    builder
        .addCase(getFilms.pending, state => {
            state.isLoading = true
        })
        .addCase(getFilms.fulfilled, (state, { payload } ) => {
            state.isLoading = false
            state.films = payload.data.results
        })
        .addCase(getFilms.rejected, state => {
            state.isLoading = false
            state.errorInfo = 'unable to fetch data'
        })
        .addCase(getFilmDetails.pending, state => {
            state.isLoading = true
        })
        .addCase(getFilmDetails.fulfilled, (state, { payload: {data} }) => {
            state.isLoading=true
            state.detailedMovie = data
        })
        .addCase(getFilmDetails.rejected, state => {
            state.isLoading = false
            state.errorInfo = 'unable to fetch data'
        })
})