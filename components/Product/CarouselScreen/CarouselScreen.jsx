import { useState } from 'react';
import Slider from 'react-slick';
import { map, size } from 'lodash';
import { Image } from 'semantic-ui-react';
import BasicModal from '../../../components/Modal/BasicModal';
import { BASE_PATH } from '../../../utils/constants';

export default function CarouselScreen({ title, screenShots, propBorder }) {
   const [showModal, setShowModal] = useState(false);
   const [urlImage, setUrlImage] = useState(null);
   let imageUrl;

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
                  (
                     <Image
                        key={screenShot.id}
                        src={imageUrl}
                        className={propBorder}
                        alt={screenShot.name}
                        onClick={() => openImage(BASE_PATH + screenShot.url)}
                        onError={(e) => {
                           e.target.onerror = null;
                           e.target.src = '/product-default.jpg';
                        }}
                     />
                  )
               )
            )}
         </Slider>
         <BasicModal
            show={showModal}
            setShow={setShowModal}
            centered
            title={title}
            className="service-info-container_modal"
         >
            <Image src={urlImage} alt={title} />
         </BasicModal>
      </>
   );
}
