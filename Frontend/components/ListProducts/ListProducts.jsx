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

export default function ListProducts({ products }) {
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
                  <Product key={product._id} product={product} />
               ))}
            </Grid.Row>
         </Grid>
      </div>
   );
}

function Product({ product }) {
   return (
      <Grid.Column className="list-products__product">
         <Link href={`/boutique/${product.category_retail.url}/${product.url}`}>
            <a>
               <div className="list-products__product-poster">
                  <Image
                     src={`${BASE_PATH}${product.poster.url}`}
                     alt={product.title}
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
