import { useState, useEffect } from 'react';
import { size } from 'lodash';
import { getRecommendedProductsApi } from '../../../api/products';
import CarouselProducts from '../../Product/CarouselProducts';

export default function RecommendedProducts() {
   const [recommendedProducts, setRecommendedProducts] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getRecommendedProductsApi();
         setRecommendedProducts(response || []);
      })();
   }, []);

   if (!recommendedProducts) return null;

   return (
      <section className="recommended-products">
         {!recommendedProducts && <Loader active>Cargando Productos</Loader>}
         {recommendedProducts && size(recommendedProducts) === 0 && (
            <div className="p-5 text-center">
               <h3>Por el momento no hay productos recomendados disponibles</h3>
            </div>
         )}
         {size(recommendedProducts) > 0 && (
            <CarouselProducts products={recommendedProducts} />
         )}
      </section>
   );
}
