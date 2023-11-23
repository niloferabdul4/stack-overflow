import React from 'react'
import Globe from '../../assets/Globe.svg'
import { NavLink } from 'react-router-dom'
import './LeftSidebar.css'
const LeftSidebar = () => {
  return (
    <div className='left_sidebar'>
        <div className='side_nav'>
            <NavLink to='/' className='side_nav_links' activeClassName='active'>
                <p>Home</p>
            </NavLink>
            <div className="side_nav_div">
                <p style={{paddingLeft:'10px'}}>PUBLIC</p>
                <NavLink to='/Questions' className='side_nav_links'>
                 <span style={{display:'flex'}}>   
                <img src={Globe} alt='globe' />
                <p style={{paddingLeft:'10px'}}>Questions</p>
                </span>
                </NavLink>
                <NavLink to='/Tags' className='side_nav_links' activeClassName='active'>
                    <p style={{paddingLeft:'40px'}}>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side_nav_links' activeClassName='active'>
                    <p style={{paddingLeft:'40px'}}>Users</p>
                </NavLink>
            </div>
        </div>
   
    </div>
  )
}

export default LeftSidebar
