import React from 'react';
import { map, size } from 'lodash';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';
import { BASE_PATH } from '../../../utils/constants';

export default function CarouselScreen({ title, screenShots }) {
   const settings = {
      className: 'carousel-screen',
      dots: false,
      Infinity: true,
      speed: 500,
      slidesToShow: size(screenShots) > 3 ? 3 : size(screenShots),
      swipeToSlide: true,
   };
   return (
      <Slider {...settings}>
         {map(screenShots, (screenShot) => (
            <Image
               key={screenShot.id}
               src={`${BASE_PATH}${screenShot.url}`}
               alt={screenShot.name}
               onClick={() => console.log('Abrir imagen...')}
            />
         ))}
      </Slider>
   );
}
