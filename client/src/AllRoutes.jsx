import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import User from './pages/User/User'
const AllRoutes = () => {
  return (
   <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/auth' element={<Auth/>}  /> 
         <Route path='/user' element={<User/>}  /> 
   </Routes>
  )
}

export default AllRoutes
