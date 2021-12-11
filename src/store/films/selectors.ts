export const selectFilms = (state:any) => {
    return state.films.films
}

export const selectFilmsStatus = (state: any) => {
    return state.films.isLoading
} 

export const selectFilmDetails = (state: any) => {
    return state.films.detailedMovie
}