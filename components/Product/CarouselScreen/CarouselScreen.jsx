import { useState } from 'react';
import Slider from 'react-slick';
import { map, size } from 'lodash';
import { Image, Modal } from 'semantic-ui-react';
import { BASE_PATH } from '../../../utils/constants';

export default function CarouselScreen({ title, screenShots }) {
   const [showModal, setShowModal] = useState(false);
   const [urlImage, setUrlImage] = useState(null);
   let imageUrl;
   let imageUrlOpen;

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
            {map(
               screenShots,
               (screenShot) => (
                  (imageUrl =
                     size(screenShot.formats) === 4
                        ? BASE_PATH + screenShot.formats.small.url
                        : BASE_PATH + screenShot.url),
                  (imageUrlOpen =
                     size(screenShot.formats) === 4
                        ? BASE_PATH + screenShot.formats.large.url
                        : BASE_PATH + screenShot.url),
                  (
                     <Image
                        key={screenShot.id}
                        src={imageUrl}
                        alt={screenShot.name}
                        onClick={() => openImage(imageUrlOpen)}
                     />
                  )
               )
            )}
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
