import React from 'react';
import "./Myprofile.css";
import g from "./hhhh.jpg";
import f from "./facebook.png";
import I from "./gram.png";
import i from "./in.png";

function Myprofile() {
    return (
        <div>
            <div className='first'>
                <div className='sec'>
                    <div className='sec-c'>
                        <img src={g} className='sec-cc' />
                    </div>
                    <div className='t-text'>
                        <h2 className='textt'>Gajanan jena</h2>
                        <h5 className='text'>Frontend developer</h5><br/>
                        <a href='https://www.facebook.com/gajanan.jenadinesh'>
                            <img src={f} className='img-size'/>
                        </a>
                        <a href='https://www.instagram.com/gajanan_jena_007'>
                            <img src={I} className='img-size'/>
                        </a>
                        <a href='https://www.linkedin.com/in/gajanan-jena-9b650721b'>
                            <img src={i} className='img-size'/>
                        </a>
                        <br/>
                       
                     <hr/>
                        <button className='btnn'> 
                        <a href='mailto:gajananjena123@gmail.com' style={{textDecorationLine:"none",color:"white"}}>
                        Message
                        </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myprofile