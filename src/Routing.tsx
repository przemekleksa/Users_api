import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Planets from './screens/Planets';
import People from './screens/People';
import Films from './screens/Films';
import Vehicles from './screens/Vehicles';
import Http404 from './screens/Http404';
import Home from './screens/Home';
import PersonDetails from './components/Details/PersonDetails';
import { FilmDetails } from './components/Details/FilmDetails';
import { PlanetDetails } from './components/Details/PlanetDetails';
import { VehicleDetails } from './components/Details/VehicleDetails';

export const Routing = () => {
    return (
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/*' element={<Http404 />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/films" element={<Films />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/people/details/:id" element={<PersonDetails/>} />
            <Route path="/films/details/:id" element={<FilmDetails/>} />
            <Route path="/planets/details/:id" element={<PlanetDetails/>} />
            <Route path="/vehicles/details/:id" element={<VehicleDetails/>} />
          </Routes>
    )
}
