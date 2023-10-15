import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../toolkit/Pages/Home'
import Aboutas from '../toolkit/Pages/Aboutas'
import Contact from "../toolkit/Pages/Contact"
import List from "../toolkit/Pages/List"
import Product from "../toolkit/Pages/Product"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutas/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App