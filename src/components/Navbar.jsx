import React from 'react'
import "../components/Nav.css"

const Navbar = ({handelLogin}) => {
  
  return (
    <div className='nav-bar'>
      <nav>
        <div className="logo">
          <a href="https://www.nike.com/in/" target='_blank'><img src="../public/logo.png" alt=""/></a>
          </div>
        <div className="links">
            <a href="">Menu</a>
            <a href="">Location</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        <div className="btn">
    <button onClick={()=>{handelLogin()}}>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
