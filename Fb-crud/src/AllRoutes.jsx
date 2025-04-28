import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import AddProduct from './Pages/AddProduct'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/addproduct' element={<AddProduct/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes