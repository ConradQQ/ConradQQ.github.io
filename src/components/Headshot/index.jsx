import React from 'react'
import logo from '../../assets/images/headshot.png'
import './index.scss'
const Headshot = () => {
  return (
    <div className='logo-container'>
     <img 
     src={logo} 
     alt="dev headshot" 
     />
    </div>
  )
}

export default Headshot