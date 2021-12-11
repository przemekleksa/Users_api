import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getPeopleRequest, getPersonDetailsRequest } from "../../api/people";

export const getPeople = createAsyncThunk('people/getPeople', () => {
    return getPeopleRequest()
})

export const getPersonDetails = createAsyncThunk('people/getPersonDetails', (id: string) => {
    return getPersonDetailsRequest(id)
})

export const resetPeople = createAction('people_reset')