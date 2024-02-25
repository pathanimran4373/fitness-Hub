import React from 'react'
import { useRef} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import './Header.scss';
import { Link } from 'react-router-dom';
function Header() {
  const navRef = useRef();
  const showNavbar = ()=> {  
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div className="header">
      <div id="logo">FIT <span>NESS</span></div>
      <nav className="navbar" ref = {navRef}>
        <Link className='menu' onClick={showNavbar} to='/'>HOME</Link>
        <Link className='menu' onClick={showNavbar} to='About'>ABOUT</Link>
        <Link className='menu' onClick={showNavbar} to='Services'>SERVICES</Link>
        <Link className='menu' onClick={showNavbar} to='Contact'>CONTACT</Link>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button>

      </nav>
        <button className='nav-btn' onClick={showNavbar}><FaBars/></button>

    </div>
  )
}

export default Header;
