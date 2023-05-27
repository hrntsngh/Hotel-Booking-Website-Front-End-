import React, { useEffect, useState } from 'react'
import "./Bookings.css"
import Bookings from "./Bookings";
import Footer from "./Footer"
import axios from 'axios';
import Loader from './Loader';

function BookingDetails() {
    const [BookingData,setBooking]= useState(null);
    useEffect(()=>{
        axios.get("/").then((res)=>{
            setBooking(res.data.MyBookings);
        })
    },[])
    console.log(BookingData);
    return (
        <>
        <div className="yourBookings">
        <p className=''>Your Bookings are : </p>
        </div>
        
        <div className='searchPage'>
        
        {!BookingData && <Loader/>}
        {BookingData?.length == 0 && <div className="Nothing">
            <p>No Hotel Booked</p>
        </div> }
            {BookingData?.map((data)=>{
                return <Bookings
                img={"http://localhost:5000/"+data.ProfilePic}
                location={data.Address}
                title={data.HotelName}
                description={data.Description}
                price={data.Price}
            />
            })}
            
        </div>
        <Footer/>
        </>
    )
}

export default BookingDetails
