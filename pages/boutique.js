import { size } from 'lodash';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';
import BasicLayout from '../layouts/Basic';
import { useEffect, useState } from 'react';
import { getProductsByCategoryApi } from '../api/products';
import { Container, Grid, Loader } from 'semantic-ui-react';
import Pagination from '../components/Pagination';
import {
   getCategoryRetailApi,
   getTotalProductsCategoryApi,
} from '../api/category-retail';
import { getTypeChocolateApi } from '../api/type-chocolate';

const DynamicTypeChocolate = dynamic(() =>
   import('../components/typeChocolate')
);
const DynamicCategoryRetail = dynamic(() =>
   import('../components/categoryRetail')
);
const DynamicListProducts = dynamic(() => import('../components/ListProducts'));
const DynamicRecommendedProducts = dynamic(() =>
   import('../components/Home/RecommendedProducts')
);

const limitPerPage = 10;

export default function Boutique() {
   const { query, replace } = useRouter();
   const [products, setProducts] = useState(false);
   const [category, setCategory] = useState(null);
   const [chocolate, setChocolate] = useState(null);
   const [totalProducts, setTotalProducts] = useState(null);
   const [categoryRetail, setCategoryRetail] = useState([]);
   const [typeChocolate, setTypeChocolate] = useState([]);
   const [cleanUrl, setCleanUrl] = useState(false);
   const [queryType, setQueryType] = useState(null);
   const btn = document.getElementById(queryType);

   const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
   };

   useEffect(() => {
      if (btn) {
         btn.click();
      }
   }, [btn, query.type]);

   useEffect(() => {
      if (query.type && !query.page) {
         setQueryType(query.type);
         replace(`/boutique`);
      } else {
         replace(`/boutique`);
      }
      setCleanUrl(false);
   }, [cleanUrl]);

   useEffect(() => {
      (async () => {
         const response = await getCategoryRetailApi();
         if (size(response) > 0) setCategoryRetail(response);
         else setCategoryRetail([]);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const response = await getTypeChocolateApi();
         if (size(response) > 0) setTypeChocolate(response);
         else setTypeChocolate([]);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const response = await getTotalProductsCategoryApi(
            category,
            chocolate
         );
         setTotalProducts(response);
      })();
   }, [category, chocolate]);

   useEffect(() => {
      (async () => {
         const response = await getProductsByCategoryApi(
            category,
            chocolate,
            limitPerPage,
            getStartItem()
         );
         if (size(response) > 0) setProducts(response);
         else setProducts([]);
      })();
   }, [query, category, chocolate]);

   return (
      <BasicLayout className="boutique">
         <Seo title="BOUTIQUE | LO MEJOR EN CHOCOLATES" />
         <Container fluid className="boutique-container">
            <Grid>
               <Grid.Column width={3}>
                  <h3>Categorías</h3>
                  <DynamicCategoryRetail
                     categoryRetail={categoryRetail}
                     setCategory={setCategory}
                     setCleanUrl={setCleanUrl}
                  />
                  <h3>Tipo de Chocolate</h3>
                  <DynamicTypeChocolate
                     typeChocolate={typeChocolate}
                     setChocolate={setChocolate}
                     setCleanUrl={setCleanUrl}
                  />
               </Grid.Column>
               <Grid.Column stretched width={12}>
                  {!products && <Loader active>Cargando Productos</Loader>}
                  {products && size(products) === 0 && (
                     <div>
                        <h3>No hay productos</h3>
                     </div>
                  )}
                  {size(products) > 0 && (
                     <DynamicListProducts products={products} />
                  )}
                  {size(products) > 0 && totalProducts ? (
                     <Pagination
                        totalProducts={totalProducts}
                        page={query.page ? parseInt(query.page) : 1}
                        limitPerPage={limitPerPage}
                     />
                  ) : null}
               </Grid.Column>
            </Grid>
            <DynamicRecommendedProducts />
         </Container>
      </BasicLayout>
   );
}
