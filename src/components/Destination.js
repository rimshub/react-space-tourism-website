import { useState } from "react";
import data from '../data.json'

import bgimg1 from '../images/background-destination-desktop.jpg'
import bgimg2 from '../images/background-destination-mobile.jpg'
import bgimg3 from '../images/background-destination-tablet.jpg'

const Destination = () => {
    const [destination,setDestination] = useState(0);

    return(
        <>
            <div className="img-container">
                <picture>
                    <source media="(max-width:768px)" srcSet={bgimg2} />
                    <source media="(max-width:999px)" srcSet={bgimg3} />
                    <img src={bgimg1} alt=''/>
                </picture>
            </div>
            <div className="container">
                <div className="left-container">
                    <p className="d-title"><span className="num">01</span> Pick your destination</p>
                    <img src={data.destinations[destination].images.webp} alt={data.destinations[destination].name} />
                </div>

                <div className="right-container">
                    <div className="dest-btns">
                        <button  onClick={() => {setDestination(0)}} >MOON
                            {(destination===0 ? <div className='active-btn'></div> : '')}
                        </button>
                        <button onClick={() => {setDestination(1)}} >MARS
                            {(destination===1 ? <div className='active-btn'></div> : '')}    
                        </button>
                        <button onClick={() => {setDestination(2)}} >EUROPA
                            {(destination===2 ? <div className='active-btn'></div> : '')}
                        </button>
                        <button onClick={() => {setDestination(3)}} >TITAN
                        {(destination===3 ? <div className='active-btn'></div> : '')}
                        </button>
                    </div>

                    <h2 className="dest-name">{data.destinations[destination].name}</h2>
                    <div className="dest-description">
                        <p>{data.destinations[destination].description}</p>
                    </div>
                    <div className="line"></div>

                    <div className="bottom-details">
                        <div>
                            <div className="details-heading">Avg Distance</div>
                            <div className="details">{data.destinations[destination].distance}</div>
                        </div>
                        <div>
                            <div className="details-heading">Est Travel Time</div>
                            <div className="details">{data.destinations[destination].travel}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Destination