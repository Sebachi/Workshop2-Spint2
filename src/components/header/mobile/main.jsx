import React from 'react'
import { NavLink } from 'react-router-dom'
import "./main.scss"
function MobileMenu() {
  return (
    <nav className='mobile__nav'>
            <NavLink to={"/"} className='mobile__link'> 
            <span className='mobile__link__numeral'>00</span>  <span className='mobile__link__title'>HOME</span>
            </NavLink>
            <NavLink to={"/destination"} className='mobile__link'> 
              <span className='mobile__link__numeral'>01</span>  <span className='mobile__link__title'>DESTINATION</span>
            </NavLink>
            <NavLink to={"/crew"} className='mobile__link'> 
              <span className='mobile__link__numeral'>02</span>  <span className='mobile__link__title'>CREW</span>
            </NavLink>
            <NavLink to={"/technology"}className='mobile__link'> 
              <span className='mobile__link__numeral'>03</span>  <span className='mobile__link__title'>TECHNOLOGY</span>
            </NavLink>
     </nav>
  )
}

export default MobileMenu