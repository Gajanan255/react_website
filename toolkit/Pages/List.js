import React from 'react';
import { remove } from '../redux/Cardslice';
import Topnavbarr from '../Hight and buttom/Header/Topnavbarr.js';
import Footer from '../Hight and buttom/Footer/Footer.js';
import { useDispatch, useSelector } from 'react-redux';
function List() {
  // const [pricee,setpricee]=useState()
  const carditems = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const handleremove = (id) => {
    dispatch(remove(id))
  }
  return (
    <div>
      <Topnavbarr />
      <h2 style={{ textAlign: "center", color: "black" }}>card page</h2>
      <div className='cardWrapper'>
        {
          carditems.map((x) => (
            <div className='cartcard'>
              <img src={x.image} alt='img' />
              <h5 className='sub'>Name:   {x.title}</h5>
              <h5 className='sub'>Price:   ${x.price}</h5>

              <button className='clickk' onClick={() => handleremove(x.id)}>Remove</button>
              {/*<button onClick={()=>{}}>-</button>
            <button><span>{num}</span></button>
          <button onClick={()=>{setnum(num+1)}}>+</button>*/}
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default List;