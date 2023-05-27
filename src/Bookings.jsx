import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./Bookings.css"

function Bookings({
    img,
    location,
    title,
    description,
    price,
}) {
  return (
    <div className='searchResult'>
            <img src={img} alt="" />
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
  )
}

export default Bookings
