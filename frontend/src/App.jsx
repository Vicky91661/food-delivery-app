import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/Login'
import Product from './pages/product/Product'
import Products from './pages/products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-[#080707] select-none'>
     <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/products' element={<Products/>}></Route>
         <Route path='/product/:id' element={<Product/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
