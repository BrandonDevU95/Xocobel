import { map, size } from 'lodash';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';
import { BASE_PATH } from '../../../utils/constants';
import useWindowSize from '../../../hooks/useWindowSize';
import moment from 'moment';

export default function CarouselProducts({ products }) {
   const { width } = useWindowSize();
   const [slides, setSlides] = useState(4);

   const settings = {
      className: 'carousel-screen',
      dots: false,
      Infinity: true,
      speed: 500,
      slidesToShow: slides,
      swipeToSlide: true,
   };

   useEffect(() => {
      switch (true) {
         case width >= 1200:
            setSlides(6);
            break;
         case width >= 992:
            setSlides(5);
            break;
         case width >= 768:
            setSlides(4);
            break;
         case width >= 576:
            setSlides(3);
            break;
         case width < 576:
            setSlides(1);
            break;
      }
   }, [width]);

   return (
      <div className="carousel-products container">
         <h2>Recomendados</h2>
         <Slider {...settings}>
            {map(products, (product) => (
               <div
                  className={`carousel-products_product ${
                     Math.ceil(
                        (moment(new Date()) - moment(product.createdAt)) /
                           (1000 * 60 * 60 * 24)
                     ) <= 30
                        ? 'ribbon'
                        : ''
                  }`}
                  key={product._id}
               >
                  <Link href={`/${product.url}`}>
                     <a>
                        <div className="carousel-products_product__product-poster">
                           <Image
                              src={
                                 size(product.poster.formats) === 4
                                    ? BASE_PATH +
                                      product.poster.formats.small.url
                                    : BASE_PATH + product.poster.url
                              }
                              alt={product.title}
                              fluid
                              onError={(e) => {
                                 e.target.onerror = null;
                                 e.target.src = '/product-default.jpg';
                              }}
                           />
                           <div className="carousel-products_product__product-poster-info">
                              {product.discount ? (
                                 <span className="discount">
                                    -{product.discount}%
                                 </span>
                              ) : (
                                 <span />
                              )}
                              <span className="price">${product.price}</span>
                           </div>
                        </div>
                        <h2>{product.title}</h2>
                     </a>
                  </Link>
               </div>
            ))}
         </Slider>
      </div>
   );
}
