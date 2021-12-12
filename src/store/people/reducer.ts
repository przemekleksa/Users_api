import { createReducer } from "@reduxjs/toolkit";
import { getUsers, getUserDetails, resetUsers} from "./actions";


const initState = {
    data: [],
    page: 1,
    detailedPerson: {},
    errorInfo: '',
    reset: false,
    status: 'IDLE'
}

export const usersReducer = createReducer(initState, builder => {
    builder
        .addCase(getUsers.fulfilled, (state, { payload } ) => {
            state.data = payload.data.data
        })
        .addCase(getUserDetails.fulfilled, (state, { payload: { data } }) => {
            state.detailedPerson = data.data
        })
        .addCase(resetUsers, state => {
            state.data = initState.data;
            state.reset = true
        })
        .addMatcher((action) => action.type.endsWith('/pending'), state => {
            state.status = 'PENDING'
        } )
        .addMatcher((action) => action.type.endsWith('/rejected'), state => {
            state.errorInfo = 'unable to fetch data'
            state.status = 'REJECTED'
        } )
        .addMatcher((action) => action.type.endsWith('/fulfilled'), state => {
            state.status = 'FULFILLED'
        } )
        .addDefaultCase(((state) => {
            state.status = 'IDLE'
        }))
})