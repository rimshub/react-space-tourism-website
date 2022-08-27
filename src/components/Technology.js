import React from 'react'
import { useState } from 'react'

import data from '../data.json'
import bgimg1 from '../images/background-technology-desktop.jpg'
import bgimg2 from '../images/background-technology-mobile.jpg'
import bgimg3 from '../images/background-technology-tablet.jpg'

export const Technology = () => {
  const [techData, setTechData] = useState(0)
  return (
    <>
      <div className="img-container">
          <picture>
            <source media="(max-width:768px)" srcSet={bgimg2} />
            <source media="(max-width:999px)" srcSet={bgimg3} />
            <img src={bgimg1} alt=''/>
          </picture>
      </div>
      <div className='tech-container'>
        <div className="tech-left-container">
          <p className="d-title"><span className="num">03</span> Space Launch 101</p>

          <div className="inner-container">
            <div className="tech-btns">
              <button onClick={() => {setTechData(0)}}>1</button>
              <button onClick={() => {setTechData(1)}}>2</button>
              <button onClick={() => {setTechData(2)}}>3</button>
            </div>

            <div>
              <p className='top-title'>The terminology...</p>
              <p className="name">{data.technology[techData].name}</p>
              <p className='tech-bio'>{data.technology[techData].description}</p>
            </div>
            
          </div>
        </div>
        
        <div className="tech-right-container">
          <picture>
            <source media="(max-width:768px)" srcSet={data.technology[techData].images.landscape} className='technology-image'/>
            <source media="(max-width:999px)" srcSet={data.technology[techData].images.landscape} className='technology-image'/>
            <img src={data.technology[techData].images.portrait} alt={data.technology[techData].name} className='technology-image'/>
          </picture>
        </div>
      </div>
    </>
  )
}

export default Technology
