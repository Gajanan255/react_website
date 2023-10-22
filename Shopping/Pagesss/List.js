import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/Cardslice';

function List() {
  const carditems = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const handleremove = (id) => {
    dispatch(remove(id))
  }
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
      <div>
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
      </div>
</div>


      <div className='footerr'>
      <p>Created By | <a href='#' className='copy'>Gajanan</a></p>
      </div>{/*complite footer*/}
    </div>
  )
}

export default List