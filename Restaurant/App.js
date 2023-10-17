import React from 'react';
import "./Resturant.css"

import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pagess/Home';
import Resturantabout from "./pagess/Resturantabout";
import Prodduct from "./pagess/Product";
import Contact from "./pagess/Contact";
import Usercontact from './pagess/Usercontact';

function App() {
  return (
    <div>
           
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Resturantabout/>}/>
        <Route path='/product' element={<Prodduct/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/usercontact/:b' element={<Usercontact/>}/>
        <Route path='/*' element={<Navigate to="/"/>}/>
       </Routes>
       </BrowserRouter>
      
    </div>
  )
}

export default App