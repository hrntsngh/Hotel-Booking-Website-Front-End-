import React, { useState,useEffect } from 'react'
import NavBar from './NavBar'
import { Button } from "@mui/material";
import Footer from './Footer'
import './Host.css'
import Upload from './Upload';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Host() {
    var id={};
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("/").then((res)=>{
         id= res.data;
          console.log(res.data);
          if(id.message == "Token not found"){
            navigate('/login');
          }
        });
      },[]);
      
    const [selectedImages, setSelectedImages] = useState([]);
    const [HotelName, setHotelName] = useState("");
    const [City, setCity] = useState("");
    const [Address, setAddress] = useState("");
    const [Description, setdescription] = useState("");
    const [Price,setPrice]=useState("");
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");

    

    const handleClick=async (e)=>{
        if(!Address || !Description || !Price || !City || !From || !To || !HotelName ){
            alert("Enter Details");
        }
        if(selectedImages.length == 0){
            alert("Upload Images");
        }
        if(Description.length < 100){
          alert("Description should be at least 100 words");
        }
        else{
          const response= await axios.post('/host',{
          HotelName,City,Address,Price,Description,From,To,selectedImages
        });
        if(response.status == 201){
          navigate("/");
        }
      }
        

    }

    
  return (
    <div className='hostPortal'>
    <NavBar/>
    <div className="host">
        <div className="host_box">
                <h4 className='host_title'>Become Our Partner</h4>
            <div className="seperate">
            <div className="form_div">
            <form className="info" action="">
                <div className="input">
                    <label> Hotel Name </label>
                    <input type="text" onChange={e=>{setHotelName(e.target.value)}} value={HotelName} name="HotelName" id="" required="" autoComplete='off' />
                </div>
                <div className="input">
                    <label> City </label>
                    <input type="text" onChange={e=>{setCity(e.target.value)}} value={City} name="City" id="" required="" autoComplete='off'/>
                </div>
                <div className="input">
                <label> Address </label>
                    <input type="text" onChange={e=>{setAddress(e.target.value)}} value={Address}  name="Address" id="" required="" autoComplete='off'/>
                </div>
                <div className="input">
                    <label> Price </label>
                    <input type="text" onChange={e=>{setPrice(e.target.value)}} value={Price} name="Price" id="" required="" autoComplete='off'/>
                </div>
                <div className="input describe">
                <p> Description </p>
                <textarea name="Description" onChange={e=>{setdescription(e.target.value)}} value={Description} id="" cols="50" rows="5" placeholder='Describe here(Minimum words should be 100)' required="" ></textarea>
                </div>
                <div className="input available">
                <label> Available From </label>
                <input  type="date"   onChange={e=>{setFrom(e.target.value)}} value={From}name='From'required="" />
                <label>To</label>
                <input type="date"  onChange={e=>{setTo(e.target.value)}} value={To} name='To'required="" />
                </div>
                <div className="host_butTon">
        
        </div>
        </form>
            </div>
            <div className="upload">
            <Upload images={selectedImages} Updateimages={setSelectedImages} />
            </div>
            
            </div>
            <div className="host_button">
            <Button variant="contained"  onClick={handleClick}>Proceed</Button>
            </div>
        </div>
        
    </div>
    <Footer></Footer>
    </div>
    
  )
}

export default Host




 












