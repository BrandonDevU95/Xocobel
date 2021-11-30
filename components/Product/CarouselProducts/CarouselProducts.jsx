import { map } from 'lodash';
import Link from 'next/link';
import Slider from 'react-slick';
import { Container, Image } from 'semantic-ui-react';
import { BASE_PATH } from '../../../utils/constants';

export default function CarouselProducts({ products }) {
   const settings = {
      className: 'carousel-screen',
      dots: false,
      Infinity: true,
      speed: 500,
      slidesToShow: 4,
      swipeToSlide: true,
   };

   return (
      <Container fluid className="carousel-products">
         <h2>Recomendados</h2>
         <Slider {...settings}>
            {map(products, (product) => (
               <div className="carousel-products_product" key={product._id}>
                  <Link href={`/${product.url}`}>
                     <a>
                        <div className="carousel-products_product__product-poster">
                           <Image
                              src={`${BASE_PATH}${product.poster.url}`}
                              alt={product.title}
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
      </Container>
   );
}
