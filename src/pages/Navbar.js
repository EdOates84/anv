import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from "../images/anv.jpeg";
import { Link } from 'react-scroll';
import styled from "styled-components"
// import { useHistory } from 'react-router-dom';

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const handleClick = () => {
    window.location.href = '/';
  }
  return (
  
    <nav class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      <img onClick={handleClick} src={logo}/>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <ul class="nav-list">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/images">Gallery</NavLink></li>
    <li><NavLink to="/films">Films</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><Link to="contactus" spy={true} smooth={true} style={{ textDecoration: "none" }}>Contact</Link></li>
  </ul>
</nav>

  )
}

export default Navbar
