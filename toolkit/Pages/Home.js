import React from 'react';
import Topnavbarr from '../Hight and buttom/Header/Topnavbarr.js';
import Footer from '../Hight and buttom/Footer/Footer.js';
import l from "../lady.jpg";
import m from "../men.jpg";
import f from "../fruits.jpg";
import { Button, Carousel } from "react-bootstrap";
import {  useNavigate } from 'react-router-dom';

function Home() {
  var a=useNavigate();
  return (
    <div>
       <Topnavbarr/>
        <Carousel variant='dark' >
        <Carousel.Item >
          <img src={l} style={{ height: "100vh", width: "100%" }} />
          <Carousel.Caption className='bg-white'>
            <h4>ladies bag</h4>
            <button onClick={()=>{a("./product")}} style={{backgroundColor:"rgb(33,37,41)",color:"white",borderRadius:"3px",borderColor:"rgb(33,37,41)"}}>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img src={m} style={{ height: "100vh", width: "100%" }} />
          <Carousel.Caption className='bg-white'>
            <h4>Men's Jacket</h4>
            <button onClick={()=>{a("./product")}} style={{backgroundColor:"rgb(33,37,41)",color:"white",borderRadius:"3px",borderColor:"rgb(33,37,41)"}}>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img src={f} style={{ height: "100vh", width: "100%" }} />
          <Carousel.Caption className='bg-white'>
            <h4>Fruits juces</h4>
            <button onClick={()=>{a("./product")}} style={{backgroundColor:"rgb(33,37,41)",color:"white",borderRadius:"3px",borderColor:"rgb(33,37,41)"}}>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        <Footer/> 
    </div>
  )
}

export default Home;