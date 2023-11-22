import React from 'react'
import { nav_links } from '../../constants/data'
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
           <img src='/assets/blacklogo.svg' className='logo' alt='logo'/>
             <ul className="nav_links">
                 {nav_links.map(item=>{return <>
                       
            </>})}
             </ul>
            
      </div>
    </nav>
  )
}

export default Navbar
