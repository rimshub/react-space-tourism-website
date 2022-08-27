import React from 'react'
import { useState } from 'react'
import data from '../data.json'
import bgimg1 from '../images/background-crew-desktop.jpg'
import bgimg2 from '../images/background-crew-mobile.jpg'
import bgimg3 from '../images/background-crew-tablet.jpg'

export const Crew = () => {
  const [crewData, setCrewData] = useState(0)
  return (
    <>
      <div className="img-container">
        <picture>
          <source media="(max-width:768px)" srcSet={bgimg2} />
          <source media="(max-width:999px)" srcSet={bgimg3} />
          <img src={bgimg1} alt=''/>
        </picture>
      </div>

      <div className="crew-container">
        <div className="crew-left-container">
        <p className="d-title"><span className="num">02</span> Meet your crew</p>

          <p className='role'>{data.crew[crewData].role}</p>
          <p className="name">{data.crew[crewData].name}</p>
          <p className="bio">{data.crew[crewData].bio}</p>

          <div className="crew-btns">
            <button onClick={() => {setCrewData(0)}}></button>
            <button onClick={() => {setCrewData(1)}} ></button>
            <button onClick={() => {setCrewData(2)}} ></button>
            <button onClick={() => {setCrewData(3)}} ></button>
          </div>
        </div>
        
        <div className="crew-right-container">
          <img className="crew-image" src={data.crew[crewData].images.webp} alt={data.crew[crewData].name} />
        </div>
      </div>
    </>
  )
}

export default Crew