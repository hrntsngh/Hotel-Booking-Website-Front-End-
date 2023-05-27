import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import {Link} from 'react-router-dom'
import "./Home.css";
import Card from "./Card"
import Footer from './Footer.jsx';
import axios from 'axios';
import Loader from './Loader';

function Home() {
  const[HotelData,setHotelData]=useState([]);
  useEffect(()=>{
    axios.get("/hotelData").then((res)=>{
      setHotelData(res.data);
    });
  },[]);
  return (
    <div className='Home'>
        <Banner/>
        {HotelData?.length == 0 && <Loader/>}
        <div className="home__section">
          {HotelData.map(place=>(
            <Link  to={'/place/'+ place._id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Card src={place.photos[0]} title={place.HotelName} description={place.Description} price={place.Price} City={place.City}/>
            </Link>
            
          ))}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
