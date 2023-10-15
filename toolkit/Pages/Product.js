import React from 'react'

import { useSelector } from 'react-redux';
import Topnavbarr from '../Hight and buttom/Header/Topnavbarr.js';
import Footer from '../Hight and buttom/Footer/Footer.js';
import Productslist from './Productslist.js';


function Product() {
  const items = useSelector((state) => state.card)
  return (
    <div>
      <Topnavbarr />
      <h1 style={{ textAlign: "center" }}>Card</h1>

      <span style={{ color: "white", fontSize: "20PX", float: "right", backgroundColor: "black", marginTop: "-50px" }}>items: {items.length}</span>
   <Productslist/>
      <Footer />

    </div>
  )
}

export default Product;