import React, { memo } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Body.css'; 




const TextCarousel = () => {
  return (
    <Carousel  interval={2000}  prevIcon={null} nextIcon={null} indicators={false}>
      <Carousel.Item>
        <p className="carousel-text">Additional Discount of Upto Rs.1,500 From Leading Banks -
ICICI Bank, Bank Of Baroda, IDFC Bank, Kotak Bank and More</p>
      </Carousel.Item>

      <Carousel.Item>
        <p className="carousel-text">No Cost EMI Offers -
Available With All Leading Banks</p>
      </Carousel.Item>

      <Carousel.Item>
        <p className="carousel-text">Additional Discount Of Upto Rs. 10,000 -
Available at Your Nearest Studio</p>
      </Carousel.Item>

    </Carousel>
  );
};

export default memo( TextCarousel);