import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./Review.css"

function Review({content,date,name}) {
  date = date.substring(0,10);
    const d=new Date(date);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className='review'>
        <div className="top">
        <AccountCircleRoundedIcon src="data:image/jpeg;base64,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" className='icon'/>
        <div className='profile'>
            <p>{name}</p>
            <h6>{d.getDate()+"th "}{months[d.getMonth()]+" "+d.getFullYear()}</h6>
        </div>
        </div>
        <div className="descrip">
            <p>{content}</p>
            
        </div>

    </div>
  )
}

export default Review