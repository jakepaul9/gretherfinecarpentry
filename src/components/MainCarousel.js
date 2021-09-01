import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

//custom imports
import image1 from '../assets/images/slideImages/20180216_131339.jpg'
import image2 from '../assets/images/slideImages/20190522_164551.jpg'
import image3 from '../assets/images/slideImages/20151119_150304.jpg'
import image4 from '../assets/images/slideImages/20180216_131455.jpg'
import image5 from '../assets/images/slideImages/20150702_083411.jpg'
import image6 from '../assets/images/slideImages/20160312_091801.jpg'

//custom css
import './MainCarousel.css'
const MainCarousel = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img className='d-block w-100' src={image1} alt='First slide' />
        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={image2} alt='Third slide' />

        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={image3} alt='Third slide' />

        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={image4} alt='First slide' />
        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={image5} alt='First slide' />
        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='d-block w-100' src={image6} alt='First slide' />
        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default MainCarousel
