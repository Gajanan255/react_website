import React, { useEffect, useState } from 'react';
import { add } from '../redux/Cardslice';
import "../App.css";
import { useDispatch } from 'react-redux';

function Productslist() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setproducts(data);
    }
    fetchProducts();
  }, [])
  const dispatch = useDispatch();
  const handleadd = (product) => {
    dispatch(add(product));
  }
  return (
    <div className='productsWrapper'>
      {
        products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt='image' />
            <h4 className='write'>Name : {product.title}</h4>
            <h4 className='write'>Price: ${product.price}</h4>
            <button className='click' onClick={() => { handleadd(product) }}>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Productslist;