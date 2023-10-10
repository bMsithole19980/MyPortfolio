import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    }

    const removeActive = () => {
        setIsActive(false)
    }
  
    return (
        <div className="App">
            <header className="App-header">
                <nav className='navbar'>
                    {/* logo */}
                    <a href='#home' className='logo'>Dev. </a>
                    <ul className={`navMenu ${isActive ? 'active' : ''}`}>
                        <li onClick={removeActive}>
                            <a href='#home' className={`navLink`}>Home</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#about' className={`navLink`}>About Me</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#projects' className={`navLink`}>Projects</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#education' className={`navLink`}>Education</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#contact' className={`navLink`}>Contact</a>
                        </li>
                    </ul>
                    <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
                        <span className={`bar`}></span>
                        <span className={`bar`}></span>
                        <span className={`bar`}></span>
                    </div>
                </nav>
            </header>
        </div>
    )
}
