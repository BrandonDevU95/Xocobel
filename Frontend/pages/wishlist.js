import { size, forEach } from 'lodash';
import useAuth from '../hooks/useAuth';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import { getFavoriteApi } from '../api/favorite';
import ListProducts from '../components/ListProducts';
import { Loader } from 'semantic-ui-react';
import Seo from '../components/Seo';

export default function wishlist() {
   const { auth, logout } = useAuth();
   const [products, setProducts] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getFavoriteApi(auth.idUser, logout);
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
   }, []);

   return (
      <BasicLayout className="wishlist">
         <Seo
            title={`WISHLIST | LISTA: ${
               products !== null ? products?.length : 0
            }`}
         />
         <div className="wishlist__block">
            <div className="title">Lista de deseos</div>
            <div className="data">
               {!products && <Loader active>Cargando Productos</Loader>}
               {products && size(products) === 0 && (
                  <div className="data__not-found">
                     <h3>No hay productos</h3>
                  </div>
               )}
               {size(products) > 0 && <ListProducts products={products} />}
               {/* TODO: Agregar la paginacion a favoritos */}
               {/* {size(products) > 0 && totalProducts ? (
                  <Pagination
                     totalProducts={totalProducts}
                     page={query.page ? parseInt(query.page) : 1}
                     limitPerPage={limitPerPage}
                  />
               ) : null} */}
            </div>
         </div>
      </BasicLayout>
   );
}
