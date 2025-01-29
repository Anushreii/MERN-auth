import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Header from  './components/Header'
export default function App(){
  return (
  <BrowserRouter>
  {/* Header for all pages */}
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}></Route> 
    <Route path='About' element={<About/>}></Route>
    <Route path='Signin' element={<Signin/>}></Route>
    <Route path='Signup' element={<Signup/>}></Route>
    <Route path='Profile' element={<Profile/>}></Route>
  </Routes>
     </BrowserRouter>
  );
}

