export const selectPeople = (state: any) => {
    return state.people.people
}

export const selectPerson = (state: any) => {
    return state.people.detailedPerson
}

export const selectIsLoadingPeople = (state: any) => {
    return state.people.status === 'PENDING'
}

export const selectIsRejectedPeople = (state: any) => {
    return state.people.status === 'REJECTED'
}

export const selectIsResetPeople = (state: any) => {
    return state.people.reset === true
}