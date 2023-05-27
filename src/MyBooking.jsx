import React, { useState } from 'react'
import NavBar from './NavBar'
import BookingDetails from "./BookingDetails"
import "./MyBooking.css"
import MyHotels from './MyHotels';

function MyBooking() {
const [Show,setShow]=useState(true);
  return (
    <div className='MyBooking'>
      <NavBar/>
      <div className="MyBooking_Buttons">
            <div onClick={()=>{setShow(true)}} className="MyBookings">MyBookings</div>
            <div onClick={()=>{setShow(false)}} className="MyHotels">MyHotels</div>
      </div>
      <div className="showDetails">
        {Show && <BookingDetails/>}
        {!Show && <MyHotels/>}
      </div>
    </div>
  )
}

export default MyBooking
