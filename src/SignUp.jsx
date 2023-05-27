import React, { useState } from 'react'
import "./signUp.css"
import axios from "axios";

function SignIn() {
  const[user,setuser]=useState({
    name: "",
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    const { name,value }= e.target;
    setuser(prevValue=>{
      return{
      ...prevValue,[name]:value
      };
    });
  }
  const clicked=async (e) =>{
    e.preventDefault();
    const {name,email,password}=user;
    if(name && email && password){
      try{
        const userRegistered=await axios.post('/register',{
          name,
          email,
          password
        })
        console.log(userRegistered);
        
      }
      catch(err){
        alert("Email already Exists");
        console.log(err);
      }
    }
    else{
      alert("Enter Details Properly");
    }
  }

  return (
    <div class="login-container">
    <h2>Create Account</h2>
    <form className='login_form'>
    <input className="login_input" onChange={handleChange} type="text" value={user.name} name="name" placeholder="Name" required/>
      <input className="login_input" onChange={handleChange} type="email" value={user.email} name="email" placeholder="Email" required/>
      <input className="login_input" onChange={handleChange} type="password" value={user.password} name="password" placeholder="Password" required/>
      <button className='login_button' type="submit" onClick={clicked}>Log In</button>
    </form>
    <div className="notAmember">
      <p>Already A Member? <span><a href="/login">Login</a></span></p>
    </div>
  </div>
  )
}

export default SignIn
