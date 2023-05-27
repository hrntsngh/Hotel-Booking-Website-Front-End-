import React, { useEffect, useState } from 'react';
import SignUp from './SignUp.jsx'
import './App.css';
import Home from "./Home";
import axios from "axios";
import NavBar from "./NavBar";
import Host from "./Host";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import RoomDetails from './RoomDetails.jsx';
import Login from './login.jsx';
import MyBooking from './MyBooking.jsx';

axios.defaults.baseURL='http://localhost:5000';
axios.defaults.withCredentials=true;

function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<><NavBar/><Home/></>} />
          <Route path="/place/:id" element={<RoomDetails/>} />
          <Route path="/MyBookings/:id" element={<MyBooking/>} />
          <Route path="/host" element={<Host/>}/>
        </Routes>
      </div> 
    </BrowserRouter>
    
  );
}

export default App;
