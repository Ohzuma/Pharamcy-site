import React from "react";
import { GoLocation } from "react-icons/go";
import { BiEnvelope, BiPhone, BiTimeFive } from "react-icons/bi";
// import { BsEnvelope } from "react-icons/bs";
const ContactInfo = () => {
  return (
    <>
      <div className="map" >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502441.87906357885!2d10.928392410278306!3d10.31567927667651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffd065ddb3f327%3A0xb7f91a6fd199b2fe!2sMega%20Brains%20Infotech!5e0!3m2!1sen!2sng!4v1664908399600!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: "none" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

    <div>
    <div className="more_info">      
           <div className="info">
              <div>
                <GoLocation />
              </div>
              <div>
                <span>ADDRESS</span>
                <span> Street number 5, Town, Country</span>
              </div>
            </div>
          

           
           <div className="info">
              <div>
                <BiTimeFive />
              </div>
              <div>
                <span>WORK HOURS</span>
                <span> Mon. – Frie. 11AM – 19PM </span>
              </div>
            </div>
           


           
           <div className="info">
              <div>
                  <BiEnvelope/>
              </div>
              <div>
              <span>E-MAIL</span>
                <span>brandname@company.com</span>
              </div>
            </div>
           

           
           <div className="info">
              <div>
                <BiPhone />
              </div>
              <div>
                <span>TELEPHONE</span>
                <span>(+371) 512 566 921 </span>
              </div>
            
        </div>
    </div>
    </div>
      </div>
    </>
  )
}

export default ContactInfo