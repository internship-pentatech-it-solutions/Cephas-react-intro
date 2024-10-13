import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white font-bold space-x-8 p-3 px-24'>
        <Link to='/'> Home</Link>
        <Link to='/dashboard'> Dashboard</Link>
        <Link to='/contact'> Contact</Link>
        <Link to='/about'> About</Link>
        <Link to='/profile'> Profile</Link>
        </div>
  )
}

export default Navbar