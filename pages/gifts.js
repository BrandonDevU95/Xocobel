import { size } from 'lodash';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';
import BasicLayout from '../layouts/Basic';
import { useEffect, useState } from 'react';
import { getGiftsProductsApi, getTotalGiftsApi } from '../api/products';
import { Loader } from 'semantic-ui-react';
import Pagination from '../components/Pagination';
import ListProducts from '../components/ListProducts';
import RecommendedProducts from '../components/Home/RecommendedProducts';
import useWindowSize from '../hooks/useWindowSize';

export default function Gifts() {
   const { query } = useRouter();
   const { width } = useWindowSize();
   const [gifts, setGifts] = useState(null);
   const [limitPerPage, setLimitPerPage] = useState(12);
   const [totalProducts, setTotalProducts] = useState(null);

   const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
   };

   useEffect(() => {
      if (width < 576) {
         setLimitPerPage(6);
      } else {
         setLimitPerPage(12);
      }
   }, []);

   useEffect(() => {
      (async () => {
         const response = await getGiftsProductsApi(
            limitPerPage,
            getStartItem()
         );
         if (size(response) > 0) setGifts(response);
         else setGifts([]);
      })();
   }, [query]);

   useEffect(() => {
      (async () => {
         const response = await getTotalGiftsApi();
         setTotalProducts(response);
      })();
   }, []);

   if (!gifts) return null;

   return (
      <BasicLayout className="gifts">
         <Seo title="GIFTS | UN REGALO PARA ALGUIEN ESPECIAL" />
         <section className="pt-4">
            <div className="gifts-container container">
               {!gifts && <Loader active>Cargando Productos</Loader>}
               {gifts && size(gifts) === 0 && (
                  <div>
                     <h3>No hay productos</h3>
                  </div>
               )}
               {size(gifts) > 0 && (
                  <ListProducts
                     products={gifts}
                     sizeImg="medium"
                     className="justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between"
                  />
               )}
               {size(gifts) > 0 && totalProducts ? (
                  <Pagination
                     totalProducts={totalProducts}
                     page={query.page ? parseInt(query.page) : 1}
                     limitPerPage={limitPerPage}
                  />
               ) : null}
               <RecommendedProducts />
            </div>
         </section>
      </BasicLayout>
   );
}
