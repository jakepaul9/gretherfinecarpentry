import React from 'react'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
import { MobileView } from 'react-device-detect'
import { TelephoneFill } from 'react-bootstrap-icons'
import { EnvelopeFill } from 'react-bootstrap-icons'

//custom components
import MainCarousel from '../components/MainCarousel'

//custom css
import './Home.css'

const Home = (props) => {
  return (
    <div className='home-container'>
      <MobileView>
        <div className='home-msg'>
          Providing quality craftmanship to the Rogue Valley since 2006
        </div>
      </MobileView>
      <MainCarousel />
      <MobileView>
        <div id='mobile-quote-request'>
          <span id='mobile-quote-title'>Request A Quote</span>
          <div id='phone-quote'>
            <a href='tel:+1-541-450-1805'>
              <TelephoneFill />
            </a>
          </div>
          <div id='form-quote'>
            <Link to='/Contact'>
              <span>
                <EnvelopeFill />
              </span>
            </Link>
          </div>
        </div>
      </MobileView>
    </div>
  )
}
export default Home
