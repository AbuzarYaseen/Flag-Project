import React from 'react'
import './navbar.css'
import moon from "../../assets/moon.svg";


const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Where in the world</h1>
      <div className='dark-mood'>
        <img src={moon} className='dark-mood-img'/>
        <span className='dark-mood-text'>Dark Mood</span>
      </div>

    </div>
  )
}

export default Navbar
