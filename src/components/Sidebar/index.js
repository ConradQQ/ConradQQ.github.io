import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="logo-subtitle"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <i class="bi bi-house-fill"></i>
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="/about">
                <i class="bi bi-person-circle"></i>
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="/portfolio">
                <i class="bi bi-briefcase"></i>
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="/resume">
                <i class="bi bi-journal-text"></i>
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="/contact">
                <i class="bi bi-envelope-heart"></i>
            </NavLink>

            
            
            
            
        

        </nav>
        <ul>
            <li>
                <a
                target="_blank"
                rel='noreferrer'
                href='https://www.linkedin.com/in/connor-hawkes/' >

               <i class="bi bi-linkedin"></i> </a>
            </li>

            <li>
                <a
                target="_blank"
                rel='noreferrer'
                href='https://twitter.com/KhanRadQQ' >

                <i class="bi bi-twitter"></i> </a>
            </li>

            <li>
                <a
                target="_blank"
                rel='noreferrer'
                href='https://github.com/ConradQQ' >

                <i class="bi bi-github"></i> </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar