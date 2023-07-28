import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './main.scss'

function Header() {
  const [width, setWidth] = useState(innerWidth)
  useEffect(() => {
   setWidth(innerWidth)
  }, [innerWidth])
  


  const navigate = useNavigate()
  const handleLogo = ()=>{
    navigate(`/`)
  }
  return (
    <section className='header'>
      <figure className='header__logo' onClick={handleLogo}><img src="/assets/shared/logo.svg" alt="Logo" /></figure>
      {
        innerWidth > 1200 
        
      }
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
    </section>
  )
}

export default Header