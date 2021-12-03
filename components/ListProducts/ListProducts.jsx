import { map, size } from 'lodash';
import Link from 'next/link';
import { useEffect } from 'react';
import { Image } from 'semantic-ui-react';
import { BASE_PATH } from '../../utils/constants';

export default function ListProducts({ products, sizeImg = 'thumbnail' }) {
   return (
      <div className="list-products">
         <div className="list-products_row row">
            {map(products, (product) => (
               <Product key={product._id} product={product} sizeImg={sizeImg} />
            ))}
         </div>
      </div>
   );
}

function Product({ product, sizeImg }) {
   let imgUrl;

   if (size(product.poster.formats) === 4) {
      imgUrl =
         sizeImg === 'large'
            ? BASE_PATH + product.poster.formats.large.url
            : sizeImg === 'medium'
            ? BASE_PATH + product.poster.formats.medium.url
            : sizeImg === 'small'
            ? BASE_PATH + product.poster.formats.small.url
            : sizeImg === 'thumbnail'
            ? BASE_PATH + product.poster.formats.thumbnail.url
            : '';
   } else {
      imgUrl = BASE_PATH + product.poster.url;
   }

   return (
      <div className="list-products_row-col col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
         <div className="list-products_row-col__product">
            <Link href={`/${product.url}`}>
               <a>
                  <div className="list-products_row-col__product-poster">
                     <Image src={imgUrl} alt={product.title} fluid />
                     <div className="list-products_row-col__product-poster-info">
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
      </div>
   );
}
