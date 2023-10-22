import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../Resturant.css"
import f from "../facebook.png";
import I from "../gram.png";
import i from "../in.png";
import m from "../mail.png";

function Contact() {
   var [num, setnum] = useState(0)
   const numm = () => {
      if (num > 0) {
         setnum(num - 1)
      }
      else {
         setnum(0)
      }
   }
   var a = useParams();
   var { b } = a;
   return (
      <div>
         <div style={{ backgroundImage: "url('https://c0.wallpaperflare.com/preview/735/804/924/red-apple-fruit-on-dark-background-with-water-drops.jpg')", width: "100%", height: "650px", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white" }}>
            <nav>
               <input type="checkbox" id="check" />
               <label for="check" className="checkbtn">
                  <h2 style={{ marginTop: "-7px" }}>L</h2>
               </label>
               <label className="logo">
                  <Link to="/" className='logoo'>My Resturant</Link>
               </label>
               <ul>
                  <li><Link className="active" to="/"> Home</Link></li>
                  <li><Link to="/product" className="active">Product</Link></li>
                  <li><Link to="/about" className="active">About</Link></li>
                  <li><Link to="/contact" className="active">contact</Link></li>
               </ul>
            </nav>

            
               <h2 style={{ fontSize: "33px",textAlign:'center'}}>Price: {b}</h2>
               <div className='quantaty' style={{textAlign:"center"}}>
                  <button onClick={() => { setnum(numm) }} className='quantatyy'>-</button>
                  <button className='quantatyy'>{num}</button>
                  <button onClick={() => { setnum(num + 1) }} className='quantatyy'>+</button>
   </div>
   <div className='restu-contactpage'>
               <div className='restu-contactpage-1'>
                  <label style={{ fontSize: "22px" }}>Name: </label><br />
                  <input type='text' placeholder='Enter your Name' style={{ width: "225px", height: "30px", fontSize: "17px" }} /><br></br>
                  <label style={{ fontSize: "22px" }}>Mail: </label><br />
                  <input type='text' placeholder='Enter your Mail' style={{ width: "225px", height: "30px", fontSize: "17px" }} /><br></br>
                  <label style={{ fontSize: "22px" }}>Message: </label><br />
                  <input type='text' placeholder='Enter your Message' style={{ width: "225px", height: "90px", fontSize: "17px" }} /><br></br>
                  <br /> <button onClick={() => { alert("your message has submited") }} className='btn'>Submit</button>
               </div><br/>
               <div className='restu-contactpage-2'>
                  <a href='https://www.facebook.com/gajanan.jenadinesh' >
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