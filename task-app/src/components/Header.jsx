import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-300'>
        <div className='flex justify-between items-center max-w-6xl max-auto p-3'>
            
      <Link to='/'>  <h1 className='font-extrabold'>AUTH APP</h1></Link> 
      <ul className='flex gap-4'>
        <Link to='/'><li>Home</li></Link> 
        <Link to='/About'> <li>About</li></Link> 
        <Link to='/Signin'> <li>Signin</li></Link> 
        {/* <Link to='/Singup'><li>Singup</li></Link>  */}
      </ul>
    </div>
    </div>
  )
}

export default Header
