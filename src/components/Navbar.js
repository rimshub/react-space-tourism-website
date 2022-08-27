import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar(){
    const [open, setOpen] = useState(false)

    return(
      <>
        <nav>
            <img src='./assets/shared/logo.svg' alt="" />
            <div className="line"></div>
            
            <div className={open ? "nav-container-sm" : "nav-container"}>
                
                <NavLink to='/' className='link'><span className="number">00</span>Home</NavLink>
                <NavLink to='/destination' className="link"><span className="number">01</span>Destination</NavLink>
                <NavLink to='/crew' className="link"><span className="number">02</span>Crew</NavLink> 
                <NavLink to='/technology' className="link"><span className="number">03</span>Technology</NavLink> 
                
            </div>
            <div className="menu" onClick={() => setOpen(!open)}>
                {open ? <AiOutlineClose className='burger'/> : <AiOutlineMenu className='burger' /> }
            </div>
        </nav>
        
      </>
    )
}
export default Navbar 
 
    