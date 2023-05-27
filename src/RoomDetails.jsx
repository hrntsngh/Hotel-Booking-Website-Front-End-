import React, { useEffect, useState } from 'react'
import "./RoomDetails.css"
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';
import ReviewPortal from './ReviewPortal';
import { useParams } from 'react-router-dom'
import Carousell from './Carousell';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button } from "@mui/material";
import axios from 'axios';
import Footer from './Footer.jsx';

function RoomDetails() {
  const navigate = useNavigate();
  const {id}=useParams();
const[Data,setData]=useState({});

useEffect(()=>{
    axios.get(`/place/${id}`).then((res)=>{
      setData(res.data);
    });
  },[id]);
  const [Start,setStart]=useState(Data.From);
  const [End,setEnd]=useState(Data.To);
// console.log("DATA:",Data);
  const handleStart=(e)=>{
        const { value }= e.target;
        setStart(value);
        console.log("start "+ value);
    }
    const handleEnd=(e)=>{
        const { value }= e.target;
        setEnd(value);
        console.log("end "+ value);
    }
    

  
  const calculate=(date1,date2)=>{
    
    let date11=new Date(date1);
    let date22=new Date(date2);
    let diff=(date22.getTime()-date11.getTime());
    let day=Math.ceil(diff/(1000*3600*24));
    console.log("days:"+day);
    return day;
  }
      
  const BookHotel=async(e)=>{
    e.preventDefault();
    if(!Start || !End){
      alert("Select Date");
      return;
    }
    let date1 = new Date(Start).getTime();
    let date2 = new Date(Data.From).getTime();
    let date3 = new Date(End).getTime();
    let date4 = new Date(Data.To).getTime();
    if(date1 < date2 || date3 > date4){
      alert("Hotel is only Available between " + Data.From + " To " + Data.To);
      return;
    }
    const res = await axios.put("/BookHotel",{
      id,Start,End
    });
    if(res.status == 200){
      navigate("/");
    }
    else{
      alert("Error Occured \n Try Again")
    }
  }

  return (
    <div className="main">
        <NavBar/>
        <div className="title">
            <h1>{Data.HotelName}</h1>
            <p>{Data.Address}</p>
        </div>
        <div className="carasol">
            <Carousell images={Data.photos}/>
        </div>
        <hr/>
        <p className='subp'><b>Note:</b> Hotel is only Available From {Data.From} To {Data.To}</p>
        <div className="middle">
        <div className="description">
            <p> <b>Description</b> </p>
            <p>{Data.Description}</p>
            
        </div>
    <div className="book">
        <div className="whole">
        <div className="price">
        <h4 className="price"><CurrencyRupeeIcon/>{Data.Price}<span> night </span> </h4>
        </div>
        
        <div className="check">
            <div className="checkin">
            <p>CHECK-IN</p>
            <input onChange={handleStart} type="date" format="mm-dd-yyyy"  placeholder="enter date" value={Start}/>
            </div>
            <div className="checkout">
            <p>CHECK-OUT</p>
            <input onChange={handleEnd} type="date" format="mm-dd-yyyy" placeholder={End} value={End}/>
            </div>
        </div>
        <div className="button">
        <Button type='submit' onClick={BookHotel} variant="contained">Book Now</Button>
        </div>
        <div className="line">
        <p>You won't be charged yet</p>
        </div>
        
        <div className="charges-box">
        <div className="charges">
            <p><CurrencyRupeeIcon/>{Data.Price} X {calculate(Start,End)==1? 1:calculate(Start,End)} {calculate(Start,End) <= 1?"night":"nights"}</p>
            <p><CurrencyRupeeIcon/>{calculate(Start,End)*Data.Price}</p>
        </div>
        <div className="charges">
            <p>Our Service fee</p>
            <p>Free</p>
        </div>
        </div>
        <hr />
        <div className="charges">
            <p>Total</p>
            <p><CurrencyRupeeIcon/>{calculate(Start,End)*Data.Price}</p>
        </div>
        </div>
        </div>
        </div>
        <hr />
        <ReviewPortal id={id} reviews={Data.CustomerReviews}/>
        <Footer></Footer>
    </div> 
  )
}

export default RoomDetails
