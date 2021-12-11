import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPlanetsRequest, getPlanetDetailsRequest } from "../../api/planets";

export const getPlanets = createAsyncThunk('planets/getPlanets', ()=> {
    return getPlanetsRequest()
})

export const getPlanetDetails = createAsyncThunk('planets/getPlanetDetails', (id: string) => {
    return getPlanetDetailsRequest(id)
})