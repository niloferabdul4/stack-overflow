import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import User from './pages/User/User'
import Questions from './pages/Questions/Questions'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import AskQuestion from './pages/AskQuestion/AskQuestion'
const AllRoutes = () => {
  return (
   <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Questions' element={<Questions/>} />
         <Route path='/Questions/:id' element={<DisplayQuestion/>} />
         <Route path='/AskQuestion' element={<AskQuestion/>} />
         <Route path='/Auth' element={<Auth/>}  /> 
         <Route path='/User' element={<User/>}  /> 
   </Routes>
  )
}

export default AllRoutes
