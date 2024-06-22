import React from 'react'
import '../css/header.css'
import logo from '../images/altruisty-logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt={logo} />
            </div>
            <ul>
                <li>nav bar 1</li>
                <li>nav bar 2</li>
                <li>nav bar 3</li>
                <li>nav bar 4</li>
            </ul>
            <div className="menu-bar">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}

export default Navbar