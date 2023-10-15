import React from 'react';
import f from "../facebook.png";
import I from "../gram.png";
import i from "../in.png";
import m from "../mail.png";

import Topnavbarr from '../Hight and buttom/Header/Topnavbarr.js';
import Footer from '../Hight and buttom/Footer/Footer.js';
function Contact() {
  return (
    <div>
        <Topnavbarr/>
        <div className='table'>
            <a name='contact' className='c'><h1>Contact Me</h1></a>
            <hr style={{ border: "2px solid black", width: "90px", margin: "5px 0px 0px 7px", marginLeft: "5px" }} />
            <div className='boxxx'>
               <h3>Name: </h3><input type='text' placeholder='Enter your Name' /><br />
               <h3>Mail: </h3><input type='text' placeholder='Enter your Mail' /><br />
               <h3>Mobile No: </h3><input type='number' placeholder='Enter your Mobile no' /><br /><br/>
               <a href='https://wa.me/+918118099250 ' className='btn'>Submit</a>
            </div>
         </div>
         <div className='f'>
            <div className='s'>
               <a href='https://www.facebook.com/gajanan.jenadinesh'>
                  <img src={f} />
               </a>
               <a href='mailto:gajananjena123@gmail.com'>
                  <img src={m} />
               </a>
               <a href='https://www.instagram.com/gajanan_jena_007'>
                  <img src={I} />
               </a>
               <a href='https://www.linkedin.com/in/gajanan-jena-9b650721b'>
                  <img src={i} />
               </a>
            </div>
         </div>
        <Footer/>
    </div>
  )
}

export default Contact