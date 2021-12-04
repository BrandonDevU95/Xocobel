import { size } from 'lodash';
import { useRouter } from 'next/router';
import { Container, Loader } from 'semantic-ui-react';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import { searchProductsApi, getTotalsearchProductsApi } from '../api/products';
import ListProducts from '../components/ListProducts';
import Pagination from '../components/Pagination';
import Seo from '../components/Seo';
import useWindowSize from '../hooks/useWindowSize';

export default function Search() {
   const { query } = useRouter();
   const { width } = useWindowSize();
   const [products, setProducts] = useState(null);
   const [totalProducts, setTotalProducts] = useState(null);
   const [limitPerPage, setLimitPerPage] = useState(12);

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
   }, [width]);

   useEffect(() => {
      if (document.getElementById('xoco-search')) {
         document.getElementById('xoco-search').focus();
      }
   }, []);

   useEffect(() => {
      (async () => {
         if (size(query.query) > 0) {
            const response = await searchProductsApi(
               query.query,
               limitPerPage,
               getStartItem()
            );
            if (size(response) > 0) setProducts(response);
            else setProducts([]);
         } else {
            setProducts([]);
         }
      })();
   }, [query, limitPerPage]);

   useEffect(() => {
      (async () => {
         const response = await getTotalsearchProductsApi(query.query);
         console.log(response);
         setTotalProducts(response);
      })();
   }, [query]);

   return (
      <BasicLayout className="search">
         <Seo title={`PRODUCTOS | BUSCANDO: ${query.query?.toUpperCase()}`} />
         <section className="py-4">
            <div className="search-container container">
               {!products && <Loader active>Buscando Productos</Loader>}
               {products && size(products) === 0 && (
                  <div>
                     <h3>No se encontraron resultados</h3>
                  </div>
               )}
               {size(products) > 0 && (
                  <ListProducts products={products} sizeImg="small" />
               )}
               {size(products) > 0 && totalProducts ? (
                  <Pagination
                     totalProducts={totalProducts}
                     page={query.page ? parseInt(query.page) : 1}
                     limitPerPage={limitPerPage}
                  />
               ) : null}
            </div>
         </section>
      </BasicLayout>
   );
}
