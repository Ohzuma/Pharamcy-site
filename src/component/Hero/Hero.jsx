import React from 'react'
import  './Hero.css'
import Hero_img from '../../assets/icons2.png'
import Data from './HeroData'
// import Navbar from '../../Navbar/Navbar'
const Hero = () => {
  return (
  <>
<div className="hero">
{/* <Navbar/> */}
<div className='hero_m'>
<div className="hero_content">
<div className="hero_text">
   <div className="span">
   <span>Proffesional</span>
      <span>Family Health Care</span>
   </div>

      <p>CREATE YOUR MEDICAL WEBSITE USING JEVELIN </p>
  </div>
  <div className="hero_img">
    <img src={Hero_img} alt="" />
  </div>
</div>


</div>
</div>
<div className="plan">
{Data.map((item,i)=>{
const{head,title,text,btn,id} = item;
return(
  <div className="plan_box" key={i}>
    <span>{head}</span>
    <h3>{title}</h3>
    <p>{text}</p>
    <button>{btn}</button>
  </div>
  
  )
})}
    </div>
  </>
  )
}

export default Hero