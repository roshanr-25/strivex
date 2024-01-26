import React from 'react'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import About from '../pages/About'
import {Route, Routes, useLocation} from "react-router-dom"


export default function AnimRoutes() {
  return (
  <>
    <Routes>
        <Route path='/' element={<Home/>} / >
        <Route path='/portfolio' element={<Portfolio/>} / >
        <Route path='/contact' element={<Contact/>} / >
        <Route path='/about' element={<About/>} / >        
    </Routes>
    </>
  )
}
