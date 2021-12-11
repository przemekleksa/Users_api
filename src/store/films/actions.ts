import { createAsyncThunk } from "@reduxjs/toolkit"
import { getFilmDetailsRequest, getFilmsRequest } from "../../api/films"

export const getFilms = createAsyncThunk('films/getFilms', () => {
    return getFilmsRequest()
}) // films/getFilms jest przydatne w redux pluginie (widocznosc)

export const getFilmDetails = createAsyncThunk('films/getFilmDetails', (id: string) => {
    return getFilmDetailsRequest(id)
})