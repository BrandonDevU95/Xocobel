import { size, forEach } from 'lodash';
import dynamic from 'next/dynamic';
import useAuth from '../hooks/useAuth';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import { getFavoriteApi, getTotalFavoriteApi } from '../api/favorite';
import { Container, Loader } from 'semantic-ui-react';
import Seo from '../components/Seo';
import Pagination from '../components/Pagination';
import { useRouter } from 'next/router';

const limitPerPage = 10;
const DynamicListProducts = dynamic(() => import('../components/ListProducts'));

export default function Wishlist() {
   const { query } = useRouter();
   const { auth, logout } = useAuth();
   const [products, setProducts] = useState(null);
   const [totalProducts, setTotalProducts] = useState(null);

   const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
   };

   useEffect(() => {
      (async () => {
         const response = await getFavoriteApi(
            auth.idUser,
            logout,
            limitPerPage,
            getStartItem()
         );
         if (size(response) > 0) {
            const productsList = [];
            forEach(response, (data) => {
               productsList.push(data.product);
            });
            setProducts(productsList);
         } else {
            setProducts([]);
         }
      })();
   }, [query]);

   useEffect(() => {
      (async () => {
         const response = await getTotalFavoriteApi(auth.idUser, logout);
         setTotalProducts(response);
      })();
   }, []);

   return (
      <BasicLayout className="wishlist">
         <Seo
            title={`WISHLIST | LISTA: ${
               products !== null ? products?.length : 0
            }`}
         />
         <Container fluid className="wishlist-container">
            <div className="wishlist-container__block">
               <div className="title">Lista de deseos</div>
               <div className="data">
                  {!products && <Loader active>Cargando Productos</Loader>}
                  {products && size(products) === 0 && (
                     <div className="data__not-found">
                        <h3>No hay productos</h3>
                     </div>
                  )}
                  {size(products) > 0 && (
                     <DynamicListProducts products={products} size="medium" />
                  )}
               </div>
               {size(products) > 0 && totalProducts ? (
                  <Pagination
                     totalProducts={totalProducts}
                     page={query.page ? parseInt(query.page) : 1}
                     limitPerPage={limitPerPage}
                  />
               ) : null}
            </div>
         </Container>
      </BasicLayout>
   );
}
