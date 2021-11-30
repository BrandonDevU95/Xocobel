import { size } from 'lodash';
import { useRouter } from 'next/router';
import { Container, Loader } from 'semantic-ui-react';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import { searchProductsApi, getTotalsearchProductsApi } from '../api/products';
import ListProducts from '../components/ListProducts';
import Pagination from '../components/Pagination';
import Seo from '../components/Seo';

const limitPerPage = 10;

export default function Search() {
   const { query } = useRouter();
   const [products, setProducts] = useState(null);
   const [totalProducts, setTotalProducts] = useState(null);

   const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
   };

   useEffect(() => {
      document.getElementById('xoco-search').focus();
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
   }, [query]);

   useEffect(() => {
      (async () => {
         const response = await getTotalsearchProductsApi(query.query);
         setTotalProducts(response);
      })();
   }, [query]);

   return (
      <BasicLayout className="search">
         <Seo title={`PRODUCTOS | BUSCANDO: ${query.query?.toUpperCase()}`} />
         <Container fluid className="search-container">
            {!products && <Loader active>Buscando Productos</Loader>}
            {products && size(products) === 0 && (
               <div>
                  <h3>No se encontraron resultados</h3>
               </div>
            )}
            {size(products) > 0 && <ListProducts products={products} />}
            {size(products) > 0 && totalProducts ? (
               <Pagination
                  totalProducts={totalProducts}
                  page={query.page ? parseInt(query.page) : 1}
                  limitPerPage={limitPerPage}
               />
            ) : null}
         </Container>
      </BasicLayout>
   );
}
