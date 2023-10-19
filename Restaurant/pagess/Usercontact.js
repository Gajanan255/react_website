import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../Resturant.css" 
import f from "../facebook.png";
import I from "../gram.png";
import i from "../in.png";
import m from "../mail.png";

function Contact() {
   var [num,setnum]=useState(0)
   const numm=()=>{
      if (num>0) {
         setnum(num-1)
      }
      else{
         setnum(0)
      }
   }
  var a=useParams();
  var {b}=a;
  return (
    <div>
    <div style={{backgroundImage:"url('https://c0.wallpaperflare.com/preview/735/804/924/red-apple-fruit-on-dark-background-with-water-drops.jpg')",width:"100%",height:"555px",backgroundRepeat:"no-repeat",backgroundSize:"cover",color:"white"}}>
         <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <h2 style={{marginTop:"-7px"}}>L</h2>
          </label>
          <label className="logo">
            <Link to="/" style={{color:"white"}}>My Resturant</Link>
          </label>
          <ul>
            <li><Link className="active" to="/"> Home</Link></li>
            <li><Link to="/product" className="active">Product</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact" className="active">contact</Link></li>
          </ul>
        </nav>

    <div className='table'>
            <h2 style={{fontSize:"33px"}}>Price: {b}</h2>
            <div className='quantaty'>
            <button onClick={()=>{setnum(numm)}} className='quantatyy'>-</button>
            <button className='quantatyy'>{num}</button>
            <button onClick={()=>{setnum(num+1)}} className='quantatyy'>+</button>
            </div>
            <hr style={{ border: "2px solid white", width: "90px", margin: "5px 0px 0px 7px", marginLeft: "5px" }} /><br/>
            <div className='boxxx'>
               <h3>Name: </h3><input type='text' placeholder='Enter your Name' style={{width:"280px",lineHeight:"20px",fontSize:"20px"}}/><br /><br/>
               <h3>Address: </h3><input type='address' placeholder='Enter your Address' style={{width:"280px",lineHeight:"20px",fontSize:"20px"}}/><br /><br/>
               <h3>Mobile No: </h3><input type='number' placeholder='Enter your Mobile no' style={{width:"280px",lineHeight:"20px",fontSize:"20px"}}/><br /><br/><br/>
               <a className='btn' onClick={()=>{alert("Your Order is Successfully")}}>Submit</a>
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
         </div>

    <div className='footerr'>
      <p>Created By | <a href='#' className='copy'>Gajanan</a></p>
      </div>{/*complite footer*/}
    </div>
  )
}

export default Contact