import React, { useState } from 'react'
import "./main.scss"
import dataObject from '../../services/data'
function Destination() {

  const destinationItems = dataObject.destinations
  const [item, setItem] = useState(0)
  const handleClickDestination = (index)=>{
    setItem(index)
  }

  return (

    <>
    <div className='background_destination' ></div>

    <section className='destination'>
      <article className='destination_container1'>
      <h3   className='destination_container1_title'><span>01</span> <p>Pick your destination </p></h3>
      <figure className='destination_container1_figure'>
        <img src={destinationItems[item].images.webp} alt={destinationItems[item].name}/>
      </figure>
      </article>
      <article className='destination_container2'>
        <ul className='destination_container2_buttons'>
          <li onClick={()=> handleClickDestination(0)} className={`destination_button  ${ item === 0 &&  "active_destination"} ` }>MOON</li>
          <li onClick={()=> handleClickDestination(1)} className={`destination_button  ${ item === 1 &&  "active_destination"} ` }>MARS</li>
          <li onClick={()=> handleClickDestination(2)} className={`destination_button  ${ item === 2 &&  "active_destination"} ` }>EUROPA</li>
          <li onClick={()=> handleClickDestination(3)} className={`destination_button  ${ item === 3 &&  "active_destination"} ` }>TITAN</li>
        </ul>
        <h1 className='destination_container2_title'>{destinationItems[item].name}</h1>
        <p className='destination_container2_description'>{destinationItems[item].description}</p>
        <section className='destination_container2_inf'>
          <div className='destination_line'> </div>
          <div className='destination_container2_inf_stats'>
            <p className='destination_distance'>
              <span className='destination_distance_text'>AVG. DISTANCE</span>
              <span className='destination_distance_stat'>{destinationItems[item].distance} </span>
            </p>
            <p className='destination_travel'>
              <span className='destination_travel_text'>EST. TRAVEL TIME</span>
              <span className='destination_travel_stat'>{destinationItems[item].travel} </span>
            </p>
          </div>
        </section>
      </article>
    </section>
    </>
  )
}

export default Destination