import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { BrowserView, MobileView } from 'react-device-detect'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../assets/images/gfcSiteLogo.png'

//custom css
import './MainNav.css'

const MainNav = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='nav-container'>
      <Navbar
        expand='lg'
        // bg='light'
        // fixed='top'
        // variant='light'
        className='nav-bar'
        expanded={expanded}
      >
        <Navbar.Brand href='/'>
          <div>
            <img id='logo' src={Logo} alt='logo' />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          // className='navbar-toggle'
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto nav-links'>
            <Nav.Link
              as={NavLink}
              className='nav-link'
              to='/About'
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className='nav-link'
              to='/Services'
              onClick={() => setExpanded(false)}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className='nav-link'
              to='/Contact'
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default MainNav
