import React from 'react'
import { useState } from 'react';
import "./signUp.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function LogIn() {
  
  const navigate = useNavigate();

  const[user,setuser]=useState({
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    console.log(user);
    const { name,value }= e.target;
    setuser(prevValue=>{
      return{
      ...prevValue,[name]:value
      };
    });
  }
  const clicked=async (e) =>{
    e.preventDefault();
    const {email,password}=user;
    if(!email){
      alert("Enter Email");
    }
    if(!password){
      alert("Enter Password");
    }
    else{
      const userRegistered=await axios.post('/login',{
        email,
        password
      });
      if(userRegistered.status === 201){
        alert("Incorrect Email or Password");
      }
      if(userRegistered.status === 200){
        console.log(userRegistered);
        navigate('/');
      }
      else{
        console.log("Not Found");
      }
    }
      

  }

  return (
    <div className="login-container">
  <h2>Login</h2>
  <form className='login_form'>
    <input className="login_input" onChange={handleChange} type="text" value={user.email} name="email" placeholder="Email" required/>
    <input className="login_input" onChange={handleChange} type="password" value={user.password} name="password" placeholder="Password" required/>
    <button className='login_button' type="submit" onClick={clicked}>Log In</button>
  </form>
  <div className="notAmember">
    <p>Not A Member? <span><a href="/signin">Register</a></span></p>
  </div>
</div>

  )
}
export default LogIn
