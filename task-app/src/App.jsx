import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
export default function App(){
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route> 
    <Route path='About' element={<About></About>}></Route>
    <Route path='Signin' element={<Signin></Signin>}></Route>
    <Route path='Signup' element={<Signup></Signup>}></Route>
    <Route path='Profile' element={<Profile></Profile>}></Route>
  </Routes>
     </BrowserRouter>
  );
}

