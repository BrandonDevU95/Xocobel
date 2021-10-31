import { size } from 'lodash';
import { useRouter } from 'next/router';
import { Loader } from 'semantic-ui-react';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import { searcgProductsApi } from '../api/products';
import ListProducts from '../components/ListProducts';
import Seo from '../components/Seo';

export default function search() {
   const [products, setProducts] = useState(null);
   const { query } = useRouter();

   useEffect(() => {
      document.getElementById('xoco-search').focus();
   }, []);

   useEffect(() => {
      (async () => {
         if (size(query.query) > 0) {
            const response = await searcgProductsApi(query.query);
            if (size(response) > 0) setProducts(response);
            else setProducts([]);
         } else {
            setProducts([]);
         }
      })();
   }, [query]);

   return (
      <BasicLayout className="search">
         <Seo title={`PRODUCTOS | BUSCANDO: ${query.query.toUpperCase()}`} />
         {!products && <Loader active>Buscando productos</Loader>}
         {products && size(products) === 0 && (
            <div className="no-results">
               <h3>No se encontraron resultados</h3>
            </div>
         )}
         {size(products) > 0 && <ListProducts products={products} />}
         {/* TODO: agregar componente de paginacion  */}
         {/* TODO: Buscar como reparar los espacios en las busquedas */}
      </BasicLayout>
   );
}
