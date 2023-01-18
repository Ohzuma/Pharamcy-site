import React from 'react'
import './footer.css'
import blogImg from '../../assets/beard.png'
import blogImg2 from '../../assets/matheus.png'
import {MdLocationPin} from 'react-icons/md'
import {BsTelephoneFill,BsEnvelopeFill} from 'react-icons/bs'
import {BiTime} from 'react-icons/bi'

const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-row">
            <div className="footer-item">
                <h1>Important Information</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Maecenas vestibulum lacinia turpis, ut facilisis sapien
                  lacinia eget. Cras interdum ligula elit, maximus molestie ex placerat non. 
                </p>
            </div>
            <div className="footer-item">
                <h1>Latest News</h1>
              <div className="blog">
                <div className="blog-item">
                    <div className="img">
                    <img src={blogImg} alt="diet" />

                    </div>
                    <div className="text">
                        <h3>News</h3>
                        <p><a href="/">Welcome to our new building</a></p>
                    </div>
                </div>
                <hr />
                <div className="blog-item">
                    <div className="img">
                        <img src={blogImg2} alt="diet" />
                    </div>
                    <div className="text">
                        <h3>Diet</h3>
                        <p><a href="/">Healthier diet for better future</a></p>
                    </div>
                </div>
              </div>
            </div>
            <div className="footer-item">
            <h1></h1>
                <div className="footer-box">
                    <div className="box">
                        <span>
                            <MdLocationPin />
                        </span>
                 <span>
                 Street number 5, Town, Country 
                 </span>
                    </div>
                    <div className="box">
                        <span><BsTelephoneFill/></span>
                    <span>(+371) 512 566 921 </span>
                    </div>
                    <div className="box">
                        <span><BsEnvelopeFill/></span>
                    <span>
                    brandname@company.com
                    </span>
                    </div>
                    <div className="box">
                        <span>
                            <BiTime/>
                        </span>
                   <span>
                   Mon. – Frie. 11AM – 19PM 
                   </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer