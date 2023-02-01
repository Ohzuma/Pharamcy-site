import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo-1-copy-9.png'
import { NavLink} from 'react-router-dom'
import { Link } from 'react-scroll'
import { link } from './NavData'
import { useState } from 'react';
import {FaTwitter,FaFacebook,FaSearch} from "react-icons/fa"
// import { FaCalendarCheck } from 'react-icons/fa';
const Navbar = () => {
  const [showLink,setShowLink] =useState(false);
  return (
    <nav>
  <div className='navbar_container'>
<div className='logo'>
<NavLink to='home' ><img src={Logo} alt='Logo' /></NavLink>
</div>
<div id="hamburg" onClick={()=>setShowLink(true)}>
  <span></span>
  <span></span>
  <span></span>
</div>
<div className="nav_items ">
<ul className={`${showLink?'ul_items active':'ul_items'}`}>
 {link.map((items)=>{
  const {url,id,text} = items;
  return (
    <li key={id}>
      <Link to={url} spy={true} smooth={true} offset={-100} duration={500}>{text}</Link>
    </li>
  )
 })}

    
    <li className='social'>
<a href="https://twitter.com"><FaTwitter/></a>
<a href="https://twitter.com"><FaFacebook/></a>
    </li>
  

    <li className='close' onClick={()=> setShowLink(false)}>
      <span></span>
      <span></span>
    </li>
</ul>
</div>
  </div>
    </nav>
  )
}

export default Navbar