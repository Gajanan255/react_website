import React from 'react'
import { Link } from 'react-router-dom';
import f from "../facebook.png";
import I from "../gram.png";
import i from "../in.png";
import m from "../mail.png";
function Contact() {
  return (
    <div>
      <div style={{ backgroundColor:"#000066", width: "100%", height: "555px"}} className='contactdiv'>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <h1>L</h1>
        </label>
        <label className="logo">
          <Link to="/" style={{ color: "white" }}> Shop Now</Link></label>
        <ul>
          <li><Link className="active" to="/"> Home</Link></li>
          <li><Link to="/product" className="active">Product</Link></li>
          <li><Link to="/about" className="active">About</Link></li>
          <li><Link to="/contact" className="active">Contact</Link></li>
          <li><Link to="/list" className="active">List</Link></li>
        </ul>
      </nav>
<br/>
      <div className='table'>
            <a name='contact' ><h1 style={{color:"white",width:"180px"}}>Contact Me</h1></a>
            <hr style={{ border: "2px solid white", width: "90px", margin: "5px 0px 0px 12px", marginLeft: "5px" }} />
            <div style={{padding:"30px"}}>
               <h3 style={{color:"white",width:"110px"}}>Name: </h3><input type='text' placeholder='Enter your Name' style={{width:"280px",lineHeight:"20px",fontSize:"20px"}}/><br /><br />
               <h3 style={{color:"white",width:"110px"}}>Mail: </h3><input type='text' placeholder='Enter your Mail' style={{width:"280px",lineHeight:"20px",fontSize:"20px"}}/><br /><br />
               <h3 style={{color:"white",width:"140px"}}>Mobile No: </h3><input type='number' placeholder='Enter your Mobile no' style={{width:"280px",lineHeight:"20px",fontSize:"20px"}}/><br /><br /><br/>
               <a href='https://wa.me/+918118099250 ' className='btn'>Submit</a>
            </div>
         </div>
         <br/>
         <div className='f' >
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