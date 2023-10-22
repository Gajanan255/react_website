import React from 'react'
import { Link } from 'react-router-dom';
import Productlist from './Productlist';
import { useSelector } from 'react-redux';
function Products() {
  const items = useSelector((state) => state.card)
  return (
    <div>
      <div style={{backgroundColor:"aliceblue",width:"100%",height:"100%"}}>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <h1>L</h1>
          </label>
          <label className="logo">
            <Link to="/" className='logoo'> Shop Now</Link></label>
          <ul>
            <li><Link className="active" to="/"> Home</Link></li>
            <li><Link to="/product" className="active">Product</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact" className="active">Contact</Link></li>
            <li><Link to="/list" className="active">List</Link></li>
          </ul>
        </nav>
        <h1 style={{ textAlign: "center",color:"black" }}>Card</h1>

        <span style={{ color: "white", fontSize: "20PX", float: "right", backgroundColor: "black", marginTop: "-40px" }}>items: {items.length}</span>
        <Productlist />
      </div>
      <div className='footerr'>
        <p>Created By | <a href='#' className='copy'>Gajanan</a></p>
      </div>{/*complite footer*/}
    </div>
  )
}

export default Products