
import 'bootstrap/dist/css/bootstrap.min.css';
import * as RB from 'react-bootstrap';
import carousel1 from './../../img/carousel-1.png';
import carousel2 from './../../img/carousel-2.png';
import carousel3 from './../../img/carousel-3.png';
import './carousel.css';





export const Carousel = () => {
  return (
    <div>
      <section className="carsl">
        <RB.Carousel>
          <RB.Carousel.Item>
            <img
              className="d-block w-100 img1 "
              src={carousel1}
              alt="First slide"
              className="carousel"
            />
            <RB.Carousel.Caption>
              <h3>MAKE THE BODY YOU DREAM ABOUT</h3>
            </RB.Carousel.Caption>
          </RB.Carousel.Item>
          <RB.Carousel.Item>
            <img
              className="d-block w-100 img1"
              src={carousel2}
              alt="Second slide"
            />

            <RB.Carousel.Caption>
              <h3>GET SLIM AND TONED WITH YOGA</h3>
            </RB.Carousel.Caption>
          </RB.Carousel.Item>
          <RB.Carousel.Item>
            <img
              className="d-block w-100 img1"
              src={carousel3}
              alt="Third slide"
            />

            <RB.Carousel.Caption>
              <h3>REDUCE YOUR STRESS</h3>
            </RB.Carousel.Caption>
          </RB.Carousel.Item>
        </RB.Carousel>
      </section>
    </div>
  )
}

export default Carousel;
