import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <p className='tribute'>#JUSTICEFORSIDHUMOOSEWALA</p>
        <div className="icons">
            <FacebookIcon  className='iconss'/>
            <InstagramIcon  className='iconss'/>
            <TwitterIcon  className='iconss'/>
            <GitHubIcon  className='iconss'/>
        </div>
        <div className="navs">
            <a className='navItems' href="/">Home</a>
            <a className='navItems' href="../host">Be our Partner</a>
            <a className='navItems' href="/MyBookings">MyBookings</a>
        </div>
        <p>@Copyright 2023. All rights reserved.</p>
    </div>
)
}

export default Footer
