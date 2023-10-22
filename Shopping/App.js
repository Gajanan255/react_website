import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './Pagesss/Home';
import Product from './Pagesss/Products';
import About from './Pagesss/About';
import Contact from './Pagesss/Contact';
import List from './Pagesss/List';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/list" element={<List/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App