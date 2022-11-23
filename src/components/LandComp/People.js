import { Carousel } from 'react-bootstrap';
import { Box } from '@mui/material';


function People() {
  return (
    <Box sx={{maxWidth: "1000px", marginTop: '0.5rem', marginLeft:'30rem'}}>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/bm.jpg"
          alt="First slide"
          style={{borderRadius: "2ch"}}
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/cm.jpg"
        alt="Second slide"
        style={{borderRadius: "2ch"}}
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/dm.jpg"
        alt="Second slide"
        style={{borderRadius: "2ch"}}
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/fm.jpg"
        alt="Second slide"
        style={{borderRadius: "2ch"}}
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/gm.jpg"
        alt="Second slide"
        style={{borderRadius: "2ch"}}
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Im.jpg"
        alt="Third slide"
        style={{borderRadius: "2ch"}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
    </Box>


  );
}

export default People;