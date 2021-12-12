import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./people/reducer"
// import { planetReducer } from "./planets/reducer";
// import { filmsReducer } from "./films/reducer";
// import { vehiclesReducer } from "./vehicles/reducer";



const rootReducer = combineReducers({
    users: usersReducer,
    // planets: planetReducer,
    // films: filmsReducer,
    // vehicles: vehiclesReducer
})

function initStore() {
    return configureStore({
      reducer: rootReducer,
      middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
      }),
    });
  }
  
  const store = initStore();
  
  export default store;
