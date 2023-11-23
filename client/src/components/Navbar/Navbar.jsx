import React from 'react'
import { nav_links } from '../../constants/data'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'
import Avatar from '../Avatar/Avatar';


const Navbar = () => {
var user='nila'
  return (
    <nav>
      <div className="navbar">
          <Link to='/' className='nav_item nav_logo'>
              <img src={logo} className='logo' alt='logo'/>
           </Link>           
            {nav_links.map(item=>{return <>
                <Link key={item.id} to={item.path} className='nav_item nav_btn'>
                           {item.title}
                </Link>
            </>})}
            
             <form className='search'>
                <SearchIcon color='grey'  fontSize='small'/>
                <input type='text' placeholder='Search...' className='input' />
             </form>
             {!user? 
                  (<Link to='/auth' className='nav_item nav_link'>Login</Link>
                  )
                :
                  ( 
                
                  <div className="profile">
                     <Link to='/user' className='nav_item' >
                       <Avatar backgroundColor='#009dff' color='white' borderRadius='50%' px='7px' py='10px' >M</Avatar>
                     </Link>
                     <Link to='/auth' className='nav_item nav_link'>Login</Link>
                     </div>
                  
                  )
              }
           
      </div>
    </nav>
  )
}

export default Navbar
