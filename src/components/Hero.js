import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../assets/hero1.jpg';
import hero2 from './../assets/hero2.jpg';

function Hero() {
  return(
    <Carousel>
        <Carousel.Item>
            <img
                className='d-block w-100 h-50'
                src={hero1}
                alt='First Slide'
            />
            <Carousel.Caption>
                <h3>Welcome to MyCampus</h3>
                <p>Aplikasi dibangun dengan Reactjs Library!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100 h-50'
                src={hero2}
                alt='First Slide'
            />
            <Carousel.Caption>
                <h3>Welcome to MyCampus</h3>
                <p>Aplikasi dibangun dengan Reactjs Library!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Hero;