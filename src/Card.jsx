import React from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./Card.css";

function Card({ src, title, description, price,City }) {

  return (
    <div className="card">
      <img src={"http://localhost:5000/"+src} alt="" />
      <div className="card__info">
        <h2>{title} <span className="Card_span">{City}</span></h2>
        <h4>{description.substring(0, 75) + "..."}</h4>
        <h3><CurrencyRupeeIcon/>{price}</h3>
      </div>
    </div>
  );
}
export default Card;
