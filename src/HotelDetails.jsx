import React from 'react'
import {Link} from 'react-router-dom'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function HotelDetails({
    img,
    location,
    title,
    description,
    price,
    hotelId
}) {
  return (
    <Link  to={'/place/'+ hotelId} style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <div className='searchResult'>
            <img src={"http://localhost:5000/"+img} alt="" />
            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description.substring(0, 300) + "..."}</p>
                </div>

                    <div className='searchResults__price'>
                        <h2><CurrencyRupeeIcon/>{price}</h2>
                    </div>
            </div>
        </div>
        </Link>
  )
}

export default HotelDetails
