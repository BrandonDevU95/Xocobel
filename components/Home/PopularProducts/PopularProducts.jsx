import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import ListProducts from '../../ListProducts';
import { getPopularProductsApi } from '../../../api/products';
import { size } from 'lodash';

export default function PopularProducts() {
   const [popularProducts, setPopularProducts] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getPopularProductsApi();
         setPopularProducts(response);
      })();
   }, []);

   return (
      <Container fluid className="popular-products">
         <h1>Productos Estrella</h1>
         <div className="popular-products__list">
            {popularProducts && size(popularProducts) === 0 && (
               <div className="popular-products__list-not-found">
                  <h3>Por el momento no hay productos populares disponibles</h3>
               </div>
            )}
            {size(popularProducts) > 0 && (
               <ListProducts products={popularProducts} />
            )}
         </div>
      </Container>
   );
}
