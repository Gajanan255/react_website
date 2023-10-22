import React from 'react'
import "./Shopping.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&w=600')", width: "100%", height: "630px", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white" }}>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <h1>L</h1>
          </label>
          <label className="logo">
            <Link to="/" className='logoo'> Shop Now</Link></label>
          <ul>
            <li><Link className="active" href="/"> Home</Link></li>
            <li><Link to="/product" className="active">Product</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact" className="active">Contact</Link></li>
            <li><Link to="/list" className="active">List</Link></li>
          </ul>
        </nav>
        <div className='center'>
          <h1>Shop Now</h1>
          <br/>
          <p>Best Shop In India</p>
          <Link to='/product' className='btn'>Order Now</Link>
        </div>{/*complite center*/}
      </div>
      
      <div className='footerr'>
        <p>Created By | <a href='#' className='copy'>Gajanan</a></p>
      </div>{/*complite footer*/}

    </div>
  )
}

export default Home