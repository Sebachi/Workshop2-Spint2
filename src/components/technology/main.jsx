import React, { useState, useEffect } from 'react'
import "./main.scss"
import dataObject from "../../services/data.js"


const Technology = () => {
  const [techInfo, setTechInfo] = useState([])
  const [techIndex, setTechIndex] = useState(0)
  // const [techNow, setTechNow] = useState({})

  // setTechInfo(dataObject.technology)

  //   setTechNow(techInfo[techIndex])

  const techNow = dataObject.technology

  const handleClick = (id) => {
    setTechIndex(id);
  }


  return (
    <>
      {techNow ? (
        <>
          <div className="background__technology"></div>
          <section className="technology__container">

            <div className="technology__titles">
              <span>03</span>
              <h3>SPACE LAUNCH 101</h3>
            </div>
            <div className="technology__info">
              <nav className="tecnology__navbar">
                <ul>
                  <li className={techIndex == 0 ? "technology__li__activated" : "technology__li"} onClick={() => handleClick(0)}>1</li>
                  <li className={techIndex == 1 ? "technology__li__activated" : "technology__li"} onClick={() => handleClick(1)}>2</li>
                  <li className={techIndex == 2 ? "technology__li__activated" : "technology__li"} onClick={() => handleClick(2)}>3</li>
                </ul>
              </nav>

              <article className="technology__description">
                <p>THE TERMINOLOGY...</p>
                <h2>{techNow[techIndex].name}</h2>
                <p>{techNow[techIndex].description}</p>
              </article>
            </div>

            <figure className="technology__figure">
              {
                innerWidth > 1200 ? (<img src={techNow[techIndex].images.porrait} alt="an image :)" />) :
                  <img src={techNow[techIndex].images.landcape} alt="an image :)" />
              }
            </figure>

          </section >
        </>
      ) : (
        <>
          <div className="background__technology"></div>
          <section className="technology__container">

            <div className="technology__titles">
              <span>03</span>
              <h3>SPACE LAUNCH 101</h3>
            </div>
            <div className="technology__info">
              <nav className="tecnology__navbar">
                <ul>
                  <li className={techIndex == 0 ? "technology__li__actived" : "technology__li"} onClick={() => handleClick(0)}>1</li>
                  <li className={techIndex == 1 ? "technology__li__actived" : "technology__li"} onClick={() => handleClick(1)}>2</li>
                  <li className={techIndex == 2 ? "technology__li__actived" : "technology__li"} onClick={() => handleClick(2)}>3</li>
                </ul>
              </nav>

              <article className="technology__description">
                <p>THE TERMINOLOGY...</p>
                <h2>loading...</h2>
                <p>loading...</p>
              </article>
            </div>

            <figure className="technology__figure">
              <p>loading...</p>
            </figure>

          </section >
        </>
      )
      }
    </>
  )
}

export default Technology
