import Carousel from "react-bootstrap/Carousel";


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
          2023 BMW 3-Series 
          </h3>
          <p>The BMW 3 Series gets new styling and more tech for the 2023 model year. The current seventh-generation model arrived for the 2019 model year, and though it has slipped down in our rankings since its zenith, it's one of the most recognizable cars in its segment. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>
          New 2021 Volkswagen Taigo coupe-SUV
          </h3>
          <p>Volkswagen has confirmed pricing and opened order books for the Taigo - the T-Crosss sportier, more aggressive looking sibling</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&width=1200"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
          Mercedes-Benz C-Class
          </h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;

