import React from 'react'
import { Link } from 'react-router-dom'
import "../Resturant.css" 
import f from "../facebook.png";
import I from "../gram.png";
import i from "../in.png";
import m from "../mail.png";

function Contact() {
  return (
    <div>
    <div style={{backgroundImage:"url('https://c0.wallpaperflare.com/preview/735/804/924/red-apple-fruit-on-dark-background-with-water-drops.jpg')",width:"100%",height:"755px",backgroundRepeat:"no-repeat",backgroundSize:"cover",color:"white"}}>
         <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <h2>L</h2>
          </label>
          <label className="logo">
            <Link to="/" className='hr'><h1>My Resturant</h1></Link>
          </label>
          <ul>
            <li><Link className="active" to="/"> Home</Link></li>
            <li><Link to="/product" className="active">Product</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact" className="active">contact</Link></li>
          </ul>
        </nav>

    <div className='table'>
            <h2>Contact Me</h2>
            <hr style={{ border: "2px solid white", width: "90px", margin: "5px 0px 0px 7px", marginLeft: "5px" }} />
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
         </div>

    <div className='footerr'>
      <p>Created By | <a href='#' className='copy'>Gajanan</a></p>
      </div>{/*complite footer*/}
    </div>
  )
}

export default Contact