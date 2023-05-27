import React, { useEffect, useState } from 'react'
import HotelDetails from './HotelDetails'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Footer from './Footer'
import Loader from './Loader';

function MyHotels() {
    const {id}=useParams();
    let [userHotel,setuserHotel]=useState(null);
    useEffect(()=>{
        axios.get("/hotelData").then((res)=>{
            setuserHotel(res.data);
            });
    },[]);

    if(userHotel){
        userHotel=userHotel.filter((arr)=>{
            return arr.user === id;
        })
    }
  return (
    <>
    <p className='yourBookings'>Hotels you have added are :</p>
    <div className='searchPage'>
        {!userHotel && <Loader/>}
        {userHotel?.length == 0 && <div className="Nothing">
            <p>No Hotel Added</p>
        </div> }
        {userHotel && userHotel.map((hotel)=>{
           return <HotelDetails
           hotelId={hotel._id}
            img={hotel.photos[0]}
            location={hotel.Address}
            title={hotel.HotelName}
            description={hotel.Description}
            price={hotel.Price}
        />
        })}
</div>
<Footer></Footer>
    </>
       
  )
}

export default MyHotels
