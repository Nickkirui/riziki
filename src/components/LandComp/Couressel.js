import { Carousel } from 'react-bootstrap';
import { Box } from '@mui/material';


function CarouselComponent() {
  return (
    <Box sx={{maxWidth: "700px", marginTop: '0.5rem'}}>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/One.jpg"
          alt="First slide"
          style={{borderRadius: "2ch"}}
        />
        <Carousel.Caption>
          <h3>Riziki</h3>
          <p>Offers Loan products to people from all walks of life</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Two.jpg"
        alt="Second slide"
        style={{borderRadius: "2ch"}}
        />

        <Carousel.Caption>
          <h3>Thomas Mumo</h3>
          <p>Riziki helped me clear my HELB loan and start my business.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Third.jpg"
        alt="Third slide"
        style={{borderRadius: "2ch"}}
        />

        <Carousel.Caption>
          <h3>Riziki</h3>
          <p>
            Your favourite financial partner
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
    </Box>


  );
}

export default CarouselComponent;