import Carousel from 'react-bootstrap/Carousel';
import "./Carousell.css"
import Data from './Data.json'
import { useState } from 'react';
function Carousell({images}) {

  return (
    <div className="cal">
      <Carousel className='slider'>
      {images?.map((img)=>(
          <Carousel.Item>
        <img
          className="d-block w-100 size"
          src={"http://localhost:5000/"+img}
          alt="Second slide"
        />
      </Carousel.Item>
        ))}

      
    </Carousel>
    </div>
  );
}

export default Carousell ;