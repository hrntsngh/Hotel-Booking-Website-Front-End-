import React, { useState } from 'react'
import Review from "./Review"
import { Button } from "@mui/material";
import "./ReviewPortal.css"
import axios from 'axios';

function ReviewPortal({id,reviews}) {
  const [content,setcontent]=useState("");
  const handleClick=(e)=>{
    if(content == ""){
      
      alert("Write Something");
      e.preventDefault();
    }
    else
    {
      axios.put("/host",{
        id,content
      })
    }
    
    
  }
  // console.log("date "+typeof(reviews[0].Date));
  return (
    <div className='reviewPortal'>
        <div className="reviewtitle">
        <h1>Customers Review</h1>
        </div>
        <div className="reviews">
          {(reviews?.length == 0) && 
            <p>No Reviews Yet !!</p>
          }
         { reviews ?.map(review=>{
            return <Review content={review.review} date={review.Date} name={review.user}/>
          } )}

        </div>
      
        <form action="">
        <div className="postreview">
        <textarea onChange={
          (e)=>{
          setcontent(e.target.value);
        }}
           placeholder='Post Your Review' id="" value={content} cols="50" rows="5"></textarea>
        <button className='buton' type='Submit' onClick={handleClick}>POST</button>
        </div>
        </form>
            
        

    </div>
  )
}
export default ReviewPortal
