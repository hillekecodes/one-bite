import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import apple from './Images/apple.jpg';


function HomeCarousel() {
  return (
    <div className="placement">
    <Carousel className="carousel-container" interval={null}>
      <Carousel.Item className="carousel-photo">
        <img
          className="d-block w-100"
          src={require('./Images/elephant.jpg')}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption-light">
          <h3>How do you eat an elephant?</h3>
          <p>One bite at a time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-photo">
        <img
          className="d-block w-100"
          src={require('./Images/clock.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-caption-light">
          <h3>Focus by Design</h3>
          <p>Minimalist. Intuitive.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-photo">
        <img
          className="d-block w-100"
          src={require("./Images/you.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Are you ready?</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Button className="carousel-button" 
            href="/begin" 
            size="lg" 
            variant="outline-secondary">
      Get Started!
    </Button>
    </div>
  );
}

export default HomeCarousel;