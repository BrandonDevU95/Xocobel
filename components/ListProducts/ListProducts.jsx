import { map } from 'lodash';
import Link from 'next/link';
import { Image } from 'semantic-ui-react';
import { BASE_PATH } from '../../utils/constants';

export default function ListProducts({ products, size = 'thumbnail' }) {
   return (
      <div className="list-products">
         <div className="list-products_row row">
            {map(products, (product) => (
               <Product key={product._id} product={product} size={size} />
            ))}
         </div>
      </div>
   );
}

function Product({ product, size }) {
   const sizeImg =
      size === 'large'
         ? BASE_PATH + product.poster.formats?.large?.url
         : size === 'medium'
         ? BASE_PATH + product.poster.formats?.medium?.url
         : size === 'small'
         ? BASE_PATH + product.poster.formats?.small?.url
         : size === 'thumbnail'
         ? BASE_PATH + product.poster.formats?.thumbnail?.url
         : '';

   return (
      <div className="list-products_row-col col-12 col-sm-6 col-md-4 col-lg-2">
         <div className="list-products_row-col__product">
            <Link href={`/${product.url}`}>
               <a>
                  <div className="list-products_row-col__product-poster">
                     <Image src={sizeImg} alt={product.title} fluid />
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
