/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [showPaths,setShowPaths] = useState(false);
  return (
    <>
        <nav className='main-nav'>
            <div className='logo'>
                <h2>
                    <span>D</span>oc
                    <span>S</span>ite
                </h2>
            </div>

            <div className={
            showPaths ? "links mobile-menu-link" : "links"
            }>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Facility</a>
                    </li>
                    <li>
                        <a href='#'>Review</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
                <div className='hamburger-menu'>
                    <a href="#" onClick={()=>setShowPaths(!showPaths)}>
                        <GiHamburgerMenu/>
                    </a>
                </div>
            </div>
        </nav>
    </>);
};

export default Navbar;
