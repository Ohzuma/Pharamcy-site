import React from 'react'
import './Navbar.css'
import Logo from '../assets/Logo-1-copy-9.png'
import { NavLink,Link } from 'react-router-dom'
import { link,Social } from './NavData'
const Navbar = () => {
  return (
    <nav>
  <div className='navbar_container'>
<div className='logo'>
<NavLink to='/' ><img src={Logo} alt='Logo' /></NavLink>
</div>
<div className="nav_items">
<ul className='ul_items'>
 {link.map((items)=>{
  const {url,id,text} = items;
  return (
    <li key={id}>
      <NavLink to={url}>{text}</NavLink>
    </li>
  )
 })}
 {Social.map((icons)=>{
    const {id,url,icon}=icons;
    return(
    <li key={id}>
<a href={url}>{icon}</a>
    </li>
    )
  })}
</ul>
</div>
  </div>
    </nav>
  )
}

export default Navbar