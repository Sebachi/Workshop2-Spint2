import React, { useState } from 'react';
import dataObject from '../../services/data.js';
import "./main.scss"

function Crew() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);
  const totalMembers = dataObject.crew.length;
  const activeMember = dataObject.crew[activeMemberIndex];

  const handleIndicatorClick = (index) => {
    setActiveMemberIndex(index);
  };

  return (
    <>
    <div className='background_crew'></div>
    <section><h1>002</h1> <h1>MEET YOUR CREW</h1></section>
      <div>
        <p>{activeMember.role}</p>
        <p>{activeMember.name}</p>
        <p>{activeMember.bio}</p>
        <div className="indicator-container">
          {dataObject.crew.map((_, index) => (
          <span
            key={index}
            className={index === activeMemberIndex ? 'indicator active' : 'indicator'}
            onClick={() => handleIndicatorClick(index)}
          ></span>
          ))}
        </div>
      </div>
      <img src={activeMember.images.png} alt={activeMember.name} />
    </>
  );
}

export default Crew;
