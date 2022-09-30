import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css';


function Testimonials() {
    return (
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src="/images/sharon.png" />
            <div className="myCarousel">
              <h3>Sharon Memo</h3>
              <h4>Tea Farmer</h4>
              <p>
                Riziki Loans has been my business patner.Its low interest rates and reasonable payment
                plans are priceless.
              </p>
            </div>
          </div>
  
          <div>
            <img src="/images/daniel.png" />
            <div className="myCarousel">
              <h3>Daniel Mutua</h3>
              <h4>Dairy Farmer</h4>
              <p>
                The financial help from Riziki has help me boost my dairy production fa-android
                cater for my family.
              </p>
            </div>
          </div>
          
          <div>
            <img src="/images/naomi.png" />
            <div className="myCarousel">
              <h3>Naomi Atieno</h3>
              <h4>Nurse</h4>
              <p>
                Riziki helped me with my school fees and provided a suitable repayment after
                I got a job.
              </p>
            </div>
          </div>
        </Carousel>
      );
}

export default Testimonials

