import { size } from 'lodash';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';
import BasicLayout from '../layouts/Basic';
import { useEffect, useState } from 'react';
import { getProductsApi } from '../api/products';
import { Grid, Loader } from 'semantic-ui-react';
import Pagination from '../components/Pagination';
import ListProducts from '../components/ListProducts';
import CategoryRetail from '../components/categoryRetail';
import {
   getCategoryRetailApi,
   getTotalProductsCategoryApi,
} from '../api/category-retail';

const limitPerPage = 10;

export default function boutique() {
   const { query } = useRouter();
   const [products, setProducts] = useState(false);
   const [totalProducts, setTotalProducts] = useState(null);
   const [categoryRetail, setCategoryRetail] = useState([]);

   const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
   };

   useEffect(() => {
      (async () => {
         const response = await getCategoryRetailApi();
         if (size(response) > 0) setCategoryRetail(response);
         else setCategoryRetail([]);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const response = await getProductsApi(limitPerPage, getStartItem());
         if (size(response) > 0) setProducts(response);
         else setProducts([]);
      })();
   }, [query]);

   useEffect(() => {
      (async () => {
         const response = await getTotalProductsCategoryApi();
         setTotalProducts(response);
      })();
   }, []);

   // FIXME: Agregar padding a la pagina para alinear con header

   return (
      <BasicLayout className="boutique">
         <Seo title="BOUTIQUE | LO MEJOR EN CHOCOLATES" />
         <Grid>
            <Grid.Column width={3}>
               <h3>Categorias</h3>
               {/* TODO: Refrescar solo fila de la derecha para todas las paginas*/}
               <CategoryRetail categoryRetail={categoryRetail} />
            </Grid.Column>
            <Grid.Column stretched width={12}>
               {!products && <Loader active>Cargando Productos</Loader>}
               {products && size(products) === 0 && (
                  <div>
                     <h3>No hay productos</h3>
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
            </Grid.Column>
         </Grid>
      </BasicLayout>
   );
}
