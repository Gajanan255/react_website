import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Resturant.css";

import aloo from "../aloo paratha.jpg";
import Am from "../American b.jpg";
import ch from "../chole.jpg";
import lu from "../lunch item.jpg";
import po from "../poha.jpg";
import di from "../dinner item.jpg";

import chikentikaa from "../chickentikka.jpg";
import chikencurry from "../chikencurry.jpg";
import biriyani from "../chickenbiryani.jpg";
import chanamasala from "../chanamasala.jpg";
import parota from "../parota.jpg";
import bhelpuri from "../bhelpuri.jpg";
import coconutrice from "../coconutrice.jpg";
import alotikki from "../alootikki.jpg";

import samosa from "../samosa.jpg";
import pakoda from "../pakoda.jpg";
import panipuri from "../panipuri.jpg";
import vadapau from "../vadapau.jpg";
import chaat from "../chaat.jpg";
import kachori from "../kachori.jpg";
import paubhaji from "../paubhaji.jpg";
import mirchi from "../mirchibhaji.jpg"

function Product() {
  var a=useNavigate()
  return (
    <div>
      <div style={{ backgroundImage: "url('https://c0.wallpaperflare.com/preview/279/167/813/bread-table-knife-cloth.jpg')", width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white" }}>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <h2>L</h2>
          </label>
          <label className="logo">
            <Link to="/" className='logoo'><h1>My Resturant</h1></Link>
          </label>
          <ul>
            <li><Link className="active" to="/"> Home</Link></li>
            <li><Link to="/product" className="active">Product</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact" className="active" >Contact</Link></li>
          </ul>
        </nav>{/*complite nav*/}
       
        <h2 className='b' style={{width:"250px"}}>Breakfast items</h2>
        <div className='items'>
          <div className='item'>
          <img src={aloo}/>
          <h4>Aloo paratha</h4>
          <h4>Pice: 22</h4>
          <button type='order' onClick={()=>{a("/usercontact/22")}}>Order</button>
          </div>
          <div className='item'>
          <img src={Am}/>
          <h4>burger</h4>
          <h4>Pice: 32</h4>
          <button type='order' onClick={()=>{a("/usercontact/32")}}>Order</button>
          </div>
          <div className='item'>
          <img src={ch}/>
          <h4>chole</h4>
          <h4>Pice: 42</h4>
          <button type='order' onClick={()=>{a("/usercontact/42")}}>Order</button>
          </div>
          <div className='item'>
          <img src={lu}/>
          <h4>rice with curry</h4>
          <h4>Pice: 52</h4>
          <button type='order'onClick={()=>{a("/usercontact/52")}}>Order</button>
          </div>
          <div className='item'>
          <img src={po}/>
          <h4>poha</h4>
          <h4>Pice: 62</h4>
          <button type='order'onClick={()=>{a("/usercontact/62")}}>Order</button>
          </div>
          <div className='item'>
          <img src={di}/>
          <h4>Rotti</h4>
          <h4>Pice: 82</h4>
          <button type='order'onClick={()=>{a("/usercontact/82")}}>Order</button>
          </div>
        </div>{/*complite allimagess*/}

        <h2 className='b'>Lunch items</h2>
        <div className='items'>
          <div className='item'>
          <img src={chikentikaa}/>
          <h4>chiken-tikka</h4>
          <h4>Pice: 202</h4>
          <button type='order'onClick={()=>{a("/usercontact/202")}}>Order</button>
          </div>
          <div className='item'>
          <img src={chikencurry}/>
          <h4>chiken-curry</h4>
          <h4>Pice: 202</h4>
          <button type='order'onClick={()=>{a("/usercontact/202")}}>Order</button>
          </div>
          <div className='item'>
          <img src={biriyani}/>
          <h4>chiken-biriyani</h4>
          <h4>Pice: 200</h4>
          <button type='order' onClick={()=>{a("/usercontact/200")}}>Order</button>
          </div>
          <div className='item'>
          <img src={parota}/>
          <h4>parota</h4>
          <h4>Pice: 211</h4>
          <button type='order' onClick={()=>{a("/usercontact/211")}}>Order</button>
          </div>
          <div className='item'>
          <img src={chanamasala}/>
          <h4>chana-masala</h4>
          <h4>Pice: 222</h4>
          <button type='order' onClick={()=>{a("/usercontact/222")}}>Order</button>
          </div>
          <div className='item'>
          <img src={bhelpuri}/>
          <h4>bhelpuri</h4>
          <h4>Pice: 111</h4>
          <button type='order' onClick={()=>{a("/usercontact/111")}}>Order</button>
          </div>
          <div className='item'>
          <img src={coconutrice}/>
          <h4>coconutrice</h4>
          <h4>Pice: 202</h4>
          <button type='order' onClick={()=>{a("/usercontact/202")}}>Order</button>
          </div>
          <div className='item'>
          <img src={alotikki}/>
          <h4>aloo-tikki</h4>
          <h4>Pice: 150</h4>
          <button type='order' onClick={()=>{a("/usercontact/150")}}>Order</button>
          </div>
        </div>{/*complite allimagess*/}

        <h2 className='b'>Snacks items</h2>
        <div className='items'>
          <div className='item'>
          <img src={samosa}/>
          <h4>samosa</h4>
          <h4>Pice: 20</h4>
          <button type='order' onClick={()=>{a("/usercontact/20")}}>Order</button>
          </div>
          <div className='item'>
          <img src={pakoda}/>
          <h4>pakoda</h4>
          <h4>Pice: 55</h4>
          <button type='order' onClick={()=>{a("/usercontact/55")}}>Order</button>
          </div>
          <div className='item'>
          <img src={vadapau}/>
          <h4>vadapau</h4>
          <h4>Pice: 20</h4>
          <button type='order' onClick={()=>{a("/usercontact/20")}}>Order</button>
          </div>
          <div className='item'>
          <img src={chaat}/>
          <h4>chaat</h4>
          <h4>Pice: 30</h4>
          <button type='order'onClick={()=>{a("/usercontact/30")}}>Order</button>
          </div>
          <div className='item'>
          <img src={kachori}/>
          <h4>kachori</h4>
          <h4>Pice: 40</h4>
          <button type='order' onClick={()=>{a("/usercontact/40")}}>Order</button>
          </div>
          <div className='item'>
          <img src={paubhaji}/>
          <h4>paubhaji</h4>
          <h4>Pice: 77</h4>
          <button type='order' onClick={()=>{a("/usercontact/77")}}>Order</button>
          </div>
          <div className='item'>
          <img src={mirchi}/>
          <h4>mirchi-bhaji</h4>
          <h4>Pice: 44</h4>
          <button type='order'onClick={()=>{a("/usercontact/44")}}>Order</button>
          </div>
          <div className='item'>
          <img src={panipuri}/>
          <h4>panipuri</h4>
          <h4>Pice: 20</h4>
          <button type='order'onClick={()=>{a("/usercontact/20")}}>Order</button>
          </div>
        </div>{/*complite allimagess*/}

      </div>

      <div className='footerr'>
        <p>Created By | <a href='#' className='copy'>Gajanan</a></p>
      </div>{/*complite footer*/}

    </div>
  )
}

export default Product