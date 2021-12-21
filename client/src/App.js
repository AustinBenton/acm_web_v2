import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import HomePage from './components/Pages/HomePage/HomePage.js';
import Events from './components/Pages/EventsPage/EventsPage.js';
import NavBar from './components/NavBar/NavBar.js';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={HomePage} />
                <Route path='events' element={Events} />
            </Routes>

            </BrowserRouter>

        </div>
    )
}
export default App;