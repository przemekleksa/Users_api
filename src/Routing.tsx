import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Planets from './screens/Planets';
import Films from './screens/Films';
import Vehicles from './screens/Vehicles';
import Http404 from './screens/Http404';
import Home from './screens/Home';
import UserDetails from './components/Details/UserDetails';
import { FilmDetails } from './components/Details/FilmDetails';
import { PlanetDetails } from './components/Details/PlanetDetails';
import { VehicleDetails } from './components/Details/VehicleDetails';
import Users from './screens/Users';

export const Routing = () => {
    return (
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/*' element={<Http404 />} />
            <Route path="/users" element={<Users />} />
            {/* <Route path="/planets" element={<Planets />} />
            <Route path="/films" element={<Films />} />
            <Route path="/vehicles" element={<Vehicles />} /> */}
            <Route path="/users/details/:id" element={<UserDetails/>} />
            {/* <Route path="/films/details/:id" element={<FilmDetails/>} />
            <Route path="/planets/details/:id" element={<PlanetDetails/>} />
            <Route path="/vehicles/details/:id" element={<VehicleDetails/>} /> */}
          </Routes>
    )
}
