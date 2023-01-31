import React from 'react'
import PersonOne from '../../assets/beard.png'
import PersonTwo from '../../assets/matheus.png'


const Date = document.querySelector('.Date')
// Date.addEventListener('focus',(e)=>{
//   console.log(e.type)
// })
console.log(Date)

function appointment() {
  return (

    <div className='appointment'>
      <div className="rh" data-aos="fade-left">
<div className="app-card">
<div className="card">
<div className="img">
<img src={PersonOne} alt="person" />
</div>
<div className="PersonInfo">
  <h3>John Doe</h3>
  <h4>Geology Teacher</h4>
</div>
<div className="PersonDesc">
  <h1>99</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, consequatur.
    Lorem, ipsum.
  </p>
</div>
</div>
</div>
<div className="app-card">
<div className="card">
<div className="img">
<img src={PersonTwo} alt="person" />
</div>
<div className="PersonInfo">
  <h3>Kate Blossom</h3>
  <p>Garedner</p>
</div>
<div className="PersonDesc">
  <h1>99</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, consequatur.
    Lorem, ipsum.
  </p>
</div>
</div>
</div>
      </div>
      <div className="lh" data-aos="fade-right">
      <div className="heading-lg">
        <h1>Make An Appointment </h1>
        <p>AND WE WILL CONTACT YOU </p>
      </div>
      <form action="/">
        <div className="lh-input">
          <input type="text" name="name" id="name" placeholder='Full Name' />
        </div>
        <div className="lh-input">
          <input type="email" name="email" id="email" placeholder='Email' />
        </div>
        <div className="lh-input">
          <input type="number" name="number" id="phoneNumber" placeholder='Phone Number' />
        </div>
        <div className="lh-input">          
        <input type="text" name="Date" id="Date" className='Date'
           placeholder='DD/MM/YYYY' />
        </div>
        <div className="lh-input">
         <select>
          <option value="subject">Set An Appointment</option>
          <option value="Option One">Option One</option>
          <option value="Option Two">Option Two</option>
          <option value="Option Three">Option Three</option>
          <option value="Option Four">Option Four</option>
          <option value="Option Five">Option Five</option>
         </select>
        </div>
        <div className="lh-input">
       <button type='submit'>Book Now</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default appointment