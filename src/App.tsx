import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'
import { Routing } from './Routing';


function App() {

// wyciagnij nava do osobnego componenta
  return (
    <div className="App">
          <nav>
            <h1>StarWars</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/people'>People</NavLink>
            <NavLink to='/planets'>Planets</NavLink>
            <NavLink to='/films'>Films</NavLink>
            <NavLink to='/vehicles'>Vehicles</NavLink>
          </nav>
      <Routing />

      
    </div>
  );
}

export default App;
