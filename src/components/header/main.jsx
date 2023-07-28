import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './main.scss'
import useScreenSize from '../../hooks/useScreenSize'
import MobileMenu from './mobile/main'

function Header() {
  const size = useScreenSize()
  const [mobileOpen, setMobileOpen] = useState(false)
  
  const handleClickMobileOpen = ()=>{
    setMobileOpen(true)
  }
  const handleClickMobileClose = ()=>{
    setMobileOpen(false)
  }

  const navigate = useNavigate()
  const handleLogo = ()=>{
    navigate(`/`)
  }
  return (
    <section className='header'>
      <figure className='header__logo' onClick={handleLogo}><img src="/assets/shared/logo.svg" alt="Logo" /></figure>
      {
        size.width < 724 ?
        mobileOpen ?
        <div className='headerMobile'>
        <figure className='headerMobile__container' onClick={handleClickMobileClose}>
          <img src="/assets/shared/icon-close.svg" alt="menu_icon"/>
        </figure>
        <MobileMenu/>
        </div>
        :
        <figure className='headerMobile__container' onClick={handleClickMobileOpen}>
          <img src="/assets/shared/icon-hamburger.svg" alt="menu_icon"/>
        </figure>
        :
        <div className='header__container'>
        <div className='header__line'> </div>
        <nav className='header__nav'>
       
            <NavLink to={"/"} className='header__link'> 
            <span className='header__link__numeral'>00</span>  <span className='header__link__title'>HOME</span>
            </NavLink>
            <NavLink to={"/destination"} className='header__link'> 
              <span className='header__link__numeral'>01</span>  <span className='header__link__title'>DESTNATION</span>
            </NavLink>
            <NavLink to={"/crew"} className='header__link'> 
              <span className='header__link__numeral'>02</span>  <span className='header__link__title'>CREW</span>
            </NavLink>
            <NavLink to={"/technology"}className='header__link'> 
              <span className='header__link__numeral'>03</span>  <span className='header__link__title'>TECHNOLOGY</span>
            </NavLink>
        </nav>
  
        </div>
      }
     
    </section>
  )
}

export default Header