import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./SearchList.css"

function SearchList({image,name,city,price,key}) {
  return (<div className="all">
<div className='List'>
      <div className="list_img">
        <img src={"http://localhost:5000/"+image} alt="" />
      </div>
      <div className="list_name">
        <h5>{name}</h5>
        <p>{city}</p>
      </div>
      </div>
      <div className="list_price">
        <h4><CurrencyRupeeIcon/>{price}</h4>
      </div>
  </div>
  )
}

export default SearchList
