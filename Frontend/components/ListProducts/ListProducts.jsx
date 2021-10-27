import { map } from 'lodash';
import Link from 'next/link';
import { Grid, Image } from 'semantic-ui-react';
import { BASE_PATH } from '../../utils/constants';

export default function ListProducts({ products }) {
   return (
      <div className="list-products">
         <Grid>
            <Grid.Row columns={5}>
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
         <Link href={`/boutique/${product.url}`}>
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
