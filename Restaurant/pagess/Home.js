import React from 'react'
import { Link } from 'react-router-dom';
import "../Resturant.css"


function Home() {
  return (
    <div>
      <div style={{ backgroundImage: "url('https://c1.wallpaperflare.com/preview/939/168/870/596c982930fc7.jpg')", width: "100%", height: "755px", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white" }}>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <h2 style={{marginTop:"-7px"}}>L</h2>
          </label>
          <label className="logo">
            <Link to="/" style={{color:"white"}}>My Resturant</Link>
          </label>
          <ul>
            <li><Link className="active" href="/"> Home</Link></li>
            <li><Link to="/product" className="active">Product</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact" className="active">Contact</Link></li>
            <li><Link to="/usercontact" className="active"></Link></li>
          </ul>
        </nav>
        <div className='center'>
          <h1>Food Website</h1>
          <br/>
          <p>Best Food In India</p>
          <Link to='/product' className='btn'>Order Now</Link>
        </div>{/*complite center*/}
      </div>{/*complite nav*/}
      <div className='footerr'>
        <p>Created By | <a href='#' className='copy'>Gajanan</a></p>
      </div>{/*complite footer*/}
    </div>
  )
}

export default Home