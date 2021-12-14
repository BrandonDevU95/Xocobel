import { size } from 'lodash';
import { useState, useEffect } from 'react';
import { getPopularProductsApi } from '../../../api/products';
import ListProducts from '../../ListProducts';

export default function PopularProducts() {
   const [popularProducts, setPopularProducts] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getPopularProductsApi();
         setPopularProducts(response);
      })();
   }, []);

   return (
      <section className="popular-products">
         <div className="popular-products_container container">
            <h1>Productos Estrella</h1>
            <div className="popular-products__list">
               {popularProducts && size(popularProducts) === 0 && (
                  <div className="popular-products__list-not-found">
                     <h3 className="text-center">
                        Por el momento no hay productos disponibles
                     </h3>
                  </div>
               )}
               {size(popularProducts) > 0 && (
                  <ListProducts
                     products={popularProducts}
                     sizeImg="small"
                     className="justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between"
                  />
               )}
            </div>
         </div>
      </section>
   );
}
