import { useState } from 'react';
import Slider from 'react-slick';
import { map, size } from 'lodash';
import { Image, Modal } from 'semantic-ui-react';
import { BASE_PATH } from '../../../utils/constants';

export default function CarouselScreen({ title, screenShots }) {
   const [showModal, setShowModal] = useState(false);
   const [urlImage, setUrlImage] = useState(null);

   const openImage = (url) => {
      setUrlImage(url);
      setShowModal(true);
   };

   const settings = {
      className: 'carousel-screen',
      dots: false,
      Infinity: true,
      speed: 500,
      slidesToShow: size(screenShots) > 3 ? 3 : size(screenShots),
      swipeToSlide: true,
   };
   return (
      <>
         <Slider {...settings}>
            {map(screenShots, (screenShot) => (
               <Image
                  key={screenShot.id}
                  src={`${BASE_PATH}${screenShot.formats.thumbnail?.url}`}
                  alt={screenShot.name}
                  onClick={() =>
                     openImage(`${BASE_PATH}${screenShot.formats.medium?.url}`)
                  }
               />
            ))}
         </Slider>
         <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            size="small"
         >
            <Image src={urlImage} alt={title} />
         </Modal>
      </>
   );
}
