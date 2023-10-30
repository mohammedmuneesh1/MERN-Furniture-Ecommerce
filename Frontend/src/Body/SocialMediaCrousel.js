import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import sale from '../Assets/body-Assets/freedom-sales.jpg'
import diwali from '../Assets/body-Assets/diwali.avif'

export default function SocialMediaCarousel() {
  return (
    <MDBCarousel showControls showIndicators interval={2000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={sale}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={diwali}
        alt='...'
      />
    
    </MDBCarousel>
  );
}
