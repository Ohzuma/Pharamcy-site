import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import lady_img from '../../assets/Layer-1186-copy.jpg'
const Dotocr = () => {


  let [increase,setIncrease] = useState(0)
 

  // useEffect(()=>{
 
  // },[increase])
  // const myInterval= setInterval(()=>{
  //   setIncrease(increase+1)
  //  },2000/0)
  //  if(increase === 15){
  //    alert('eh over stop there')
  //    clearInterval(myInterval)
  //      }

  return (
    <>
    <div className='doctorSide'>
        <div className="doctor-lh" data-aos="fade-up">
            <div>
              <div className="span-text">
              <span>Jenna </span>  
              <span>Berg</span>
              </div>
              <p>PROFESSIONAL DENTIST </p>
            </div>
            <div className="longtext">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vivamus orci ex, pulvinar nec finibus ut,
                  cursus eget libero. In dictum sem</p>
                  <p>Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Vivamus orci ex, pulvinar 
                     nec finibus ut, cursus eget libero. In dictum sem non
                     sapien condimentum aliquet. Nulla facilisi. Mauris
                      efficitur dolor dolor, id porta nulla interdum vitae.</p>
            </div>
            <button>View All Doctors</button>
        </div>
        <div className="doctor-rh" data-aos="fade-down">
          <img src={lady_img} alt="lady_img" />
        </div>
    </div>
    <div className="counter">
      <div className="items">
        <span data-max="53" id="one">53</span>
        <span>Certified</span>
        <span>Doctors</span>
      </div>
      <div className="items">
        <span data-max="48">48</span>
        <span>Medical</span>
        <span>Service</span>
      </div>
      <div className="items">
        <span data-max="12">12</span>
        <span>Different</span>
        <span>Affiliates</span>
      </div>
      <div className="items">
        <span data-max="96">96</span>
        <span>Offered</span>
        <span>Programs</span>
      </div>
    </div>
    </>
  )
}

export default Dotocr