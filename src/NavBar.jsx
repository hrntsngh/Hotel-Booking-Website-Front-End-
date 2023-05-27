import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
import SearchList from './SearchList';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import "./NavBar.css"
function NavBar() {
  const [search,setSearch]=useState("");
  const [Data,setData]=useState(null);
  const [list,setlist]=useState(null);
  const [result,setResult]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get("/").then((res)=>{
      if(res.data.message != "Token not found"){
        setData(res.data);
      }
    });
    axios.get("/hotelData").then((res)=>{
      setlist(res.data);
    });
  },[]);
  const LogOut=()=>{
    axios.get("/logout");
    navigate("/login");
  }

  const handleSearch=(e)=>{
    setSearch(e.target.value);
    if(list){
      const element=list?.filter((ele)=>{
        return ele?.HotelName?.includes(search);})

      setResult(element);
    }
    
  }

  return (
    <div className='NavBar'>
        <div className="">
            <a href="/"><img className='Nav_logo' src="data:image/png;base64,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" alt="logo" /></a>
            
        </div>
        <div className="search_div">
        <div className="search">
            <input type="text" onChange={handleSearch} name="search" placeholder='Search' value={search} autoComplete='off'/>
            <div className="search_icon">
            <SearchIcon/>
            </div>
            
        </div>

        {search?.length >0 && <div className="search_bar">
          {result?.map((e)=>( 
            <Link onClick={()=>{setSearch("")}} to={'/place/'+ e._id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <SearchList image={e.photos[0]} name={e.HotelName} city={e.City} price={e.Price} key={e._id} />
            </Link>
          ))}
          
        </div>}
        </div>
        <div className="right">
            <p>Welcome,{!Data?.name?" ASTAAD":Data?.name}</p>
            <div className="text-container">
            <ArrowDropDownIcon/>
            
             <div className="hover-text profilee">
             {Data && 
             <Link  to={"/MyBookings/"+Data._id} className='My_booking' style={{ color: 'inherit', textDecoration: 'inherit'}}>
             My Bookings
             </Link>}
              <button onClick={LogOut} className='logout_button'>{!Data?"Login":"Logout"}</button>
            </div>
            
            </div>
            <AccountCircleIcon/>
            
        </div>
    </div>
  )
}

export default NavBar
