import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Pages/Header'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
//import Footer from './Pages/Footer';
import Home from './Pages/Home'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Header/>}></Route>
      <Route index='/' element={<Home/>}></Route>

      <Route path='/about' element={<About/>}></Route>
      <Route path='/blog' element={<Blogs/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
