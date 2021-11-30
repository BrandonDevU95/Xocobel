import { map } from 'lodash';
import Link from 'next/link';
import { Grid, Image } from 'semantic-ui-react';
import { BASE_PATH } from '../../utils/constants';
import {
   breakpointUpSm,
   breakpointUpMd,
   breakpointUpLg,
} from '../../utils/breakpoint';
import useWindowSize from '../../hooks/useWindowSize';

export default function ListProducts({ products, size = 'thumbnail' }) {
   console.log(products);
   const { width } = useWindowSize();

   const getColumnsRender = () => {
      switch (true) {
         case width > breakpointUpLg:
            return 5;
         case width > breakpointUpMd:
            return 3;
         case width > breakpointUpSm:
            return 2;
         default:
            return 1;
      }
   };

   return (
      <div className="list-products">
         <Grid>
            <Grid.Row columns={getColumnsRender()}>
               {map(products, (product) => (
                  <Product key={product._id} product={product} size={size} />
               ))}
            </Grid.Row>
         </Grid>
      </div>
   );
}

function Product({ product, size }) {
   return (
      <Grid.Column className="list-products__product">
         <Link href={`/${product.url}`}>
            <a>
               <div className="list-products__product-poster">
                  <Image
                     src={
                        size === 'medium'
                           ? BASE_PATH + product.poster.formats.medium.url
                           : BASE_PATH + product.poster.formats.thumbnail.url
                     }
                     alt={product.title}
                     fluid
                  />
                  <div className="list-products__product-poster-info">
                     {product.discount ? (
                        <span className="discount">-{product.discount}%</span>
                     ) : (
                        <span />
                     )}
                     <span className="price">${product.price}</span>
                  </div>
               </div>
               <h2>{product.title}</h2>
            </a>
         </Link>
      </Grid.Column>
   );
}
