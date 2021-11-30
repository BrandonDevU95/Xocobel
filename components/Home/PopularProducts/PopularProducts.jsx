import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container } from 'semantic-ui-react';
import { getPopularProductsApi } from '../../../api/products';
import { size } from 'lodash';

const DynamicListProducts = dynamic(() => import('../../ListProducts'));

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
               <DynamicListProducts products={popularProducts} size="small" />
            )}
         </div>
      </Container>
   );
}
