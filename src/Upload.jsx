import React,{useState} from 'react'
import "./Upload.css"
import axios from "axios";

function Upload({images,Updateimages}) {

    const onSelectFile = (e) => {
      // console.log(e.target.files);
      const files=e.target.files;
      const data=new FormData();

      for(let i=0;i<files.length;i++){
        data.append('photos',files[i]);
      }
      axios.post('/upload',data,{
        headers:{'Content-type':'multipart/form-data'}
      }).then(response=>{
        const {data:filename}=response;
        Updateimages(prev=>{
          return [...prev,...filename];
        })
      });

    }
  
  
    return (
      <section>
          <label className='label'>
          + Add Images
          <br />
          <span>more = better</span>
          <input
            className='inputt'
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </label>
        <br />
            <div className="images">
              {images.length == 0 &&  <p>No Image Selected</p> }
          {images &&
            images.map((image, index) => {
              return (
                  <img src={"http://localhost:5000"+image} alt="upload" />
              );
            })}
            
            
        </div>

      </section>
    );
}

export default Upload
