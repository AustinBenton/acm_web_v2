import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useDispatch } from 'react-redux';

// Our Files:
import NavBar from './components/NavBar/NavBar.js'
import Events from './components/Pages/EventsPage/EventsPage.js'
import Home from "./components/Pages/HomePage/HomePage.js"
import Login from "./components/Pages/LoginPage/LoginPage.js"
import Officers from "./components/Pages/OfficersPage/OfficersPage.js"
import AdminPage from "./components/AdminPortal/AdminPage.js";
import { getPosts } from './actions/posts';

function App() {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/EventsPage' element={<Events/>} />
                <Route path='/LoginPage' element = {<Login/>} />
                <Route path='/OfficersPage' element = {<Officers/>} />
                <Route path='/AdminPage' element={<AdminPage/>}/>
            </Routes>
        </Router>
    );

}

export default App