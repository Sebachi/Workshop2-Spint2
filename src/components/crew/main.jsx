import React, { useState } from "react";
import dataObject from "../../services/data.js";
import "./main.scss";
import useScreenSize from "../../hooks/useScreenSize.jsx";

function Crew() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);
  const totalMembers = dataObject.crew.length;
  const activeMember = dataObject.crew[activeMemberIndex];
  const size = useScreenSize()
  const handleIndicatorClick = (index) => {
    setActiveMemberIndex(index);
  };

  return (
    <>
      <div className="background_crew"></div>
      {size.width > 725 ? (
        <section className="crew">
          <section className="crew__banner">
            <section className="title">
              <h1 className="number">002</h1>{" "}
              <h1 className="text">MEET YOUR CREW</h1>
            </section>
            <div className="info">
              <p className="role">{activeMember.role}</p>
              <p className="name">{activeMember.name}</p>
              <p className="bio">{activeMember.bio}</p>
              <div className="indicator-container">
                {dataObject.crew.map((_, index) => (
                  <span
                    key={index}
                    className={
                      index === activeMemberIndex
                        ? "indicator active"
                        : "indicator"
                    }
                    onClick={() => handleIndicatorClick(index)}
                  ></span>
                ))}
              </div>
            </div>
          </section>
          <figure className="crew__img">
            <img src={activeMember.images.png} alt={activeMember.name} />
          </figure>
        </section>
      ) : (
        <section className="crew">
          <section className="crew__title">
            <h1 className="number">002</h1>{" "}
            <h1 className="text">MEET YOUR CREW</h1>
          </section>
          <section className="crew__box">
          <figure className="crew__img">
            <img src={activeMember.images.png} alt={activeMember.name} />
          </figure>
          <div className="line"></div>
          </section>
          <div className="crew__info">
            <div className="indicator-container">
              {dataObject.crew.map((_, index) => (
                <span
                  key={index}
                  className={
                    index === activeMemberIndex
                      ? "indicator active"
                      : "indicator"
                  }
                  onClick={() => handleIndicatorClick(index)}
                ></span>
              ))}
            </div>
            <p className="role">{activeMember.role}</p>
            <p className="name">{activeMember.name}</p>
            <p className="bio">{activeMember.bio}</p>
          </div>
        </section>
      )}
    </>
  );
}

export default Crew;
