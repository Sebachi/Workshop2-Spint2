import React from 'react'
import "./main.scss"
import { NavLink, useNavigate, Link } from 'react-router-dom'

function Home() {
  const width = innerWidth
  console.log(width);
  return (
    <>
      <div className='background_home'></div>
      <section className='home__section'>
        <article className='home__description'>
          <p className='home__description__pretext'>so, you want to travel to</p>
          <h3 className='home__description__title'>space</h3>
          <p className='home__description__info'>let's face it: if you wan to go to space. you might as well genuinely go to ouuter space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </article>
        <article className='home__btn'>
          <Link to={"/destination"} className='home__link'>
            explore
          </Link>
        </article>
      </section>
    </>
  )
}

export default Home