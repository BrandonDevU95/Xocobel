import { set, size } from 'lodash';
import Seo from '../components/Seo';
import { useRouter } from 'next/router';
import { Loader } from 'semantic-ui-react';
import BasicLayout from '../layouts/Basic';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import useWindowSize from '../hooks/useWindowSize';
import ListProducts from '../components/ListProducts';
import TypeChocolate from '../components/typeChocolate';
import CategoryRetail from '../components/categoryRetail';
import { getGiftsProductsApi, getTotalGiftsApi } from '../api/products';
import RecommendedProducts from '../components/Home/RecommendedProducts';
import { getTypeChocolateApi } from '../api/type-chocolate';

export default function Gifts() {
   const { query, replace } = useRouter();
   const { width } = useWindowSize();
   const [gifts, setGifts] = useState(null);
   const [category, setCategory] = useState(null);
   const [chocolate, setChocolate] = useState(null);
   const [limitPerPage, setLimitPerPage] = useState(12);
   const [totalProducts, setTotalProducts] = useState(null);
   const [typeChocolate, setTypeChocolate] = useState([]);
   const [categoryRetail, setCategoryRetail] = useState([]);
   const [giftsDone, setGiftsDone] = useState(false);

   const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
   };

   useEffect(() => {
      (async () => {
         const response = await getTotalGiftsApi(category, chocolate);
         setTotalProducts(response);
      })();
   }, [category, chocolate]);

   useEffect(() => {
      if (gifts && size(categoryRetail) === 0) {
         const filterTitle = [];
         gifts.forEach((gift) => {
            if (!filterTitle.includes(gift.category_retail.title)) {
               filterTitle.push(gift.category_retail.title);
               setCategoryRetail((categoryRetail) => [
                  ...categoryRetail,
                  gift.category_retail,
               ]);
            }
         });
      }
   }, [giftsDone]);

   useEffect(() => {
      (async () => {
         const response = await getTypeChocolateApi();
         if (size(response) > 0) setTypeChocolate(response);
      })();
   }, []);

   useEffect(() => {
      if (width < 576) {
         setLimitPerPage(6);
      } else {
         setLimitPerPage(12);
      }
   }, [width]);

   useEffect(() => {
      (async () => {
         const response = await getGiftsProductsApi(
            category,
            chocolate,
            limitPerPage,
            getStartItem()
         );
         if (size(response) > 0) {
            setGifts(response);
            setGiftsDone(true);
         } else setGifts([]);
      })();
   }, [query, category, chocolate, limitPerPage]);

   if (!gifts) return null;

   return (
      <BasicLayout className="gifts">
         <Seo title="GIFTS | UN REGALO PARA ALGUIEN ESPECIAL" />
         <section className="pt-4">
            <div className="gifts-container container">
               <div className="boutique-container_row row">
                  <div className="boutique-container_row-col col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2">
                     <div className="boutique-container_row-col-computer d-none d-sm-none d-md-block d-lg-block">
                        <h3>Categorías</h3>
                        <CategoryRetail
                           categoryRetail={categoryRetail}
                           setCategory={setCategory}
                           query={query}
                           replace={replace}
                        />
                        <h3>Tipo de Chocolate</h3>
                        <TypeChocolate
                           typeChocolate={typeChocolate}
                           setChocolate={setChocolate}
                           query={query}
                           replace={replace}
                        />
                     </div>
                  </div>
                  <div className="boutique-container_row-col-products col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10">
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
                           className="justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start"
                        />
                     )}
                     {size(gifts) > 0 && totalProducts ? (
                        <Pagination
                           totalProducts={totalProducts}
                           page={query.page ? parseInt(query.page) : 1}
                           limitPerPage={limitPerPage}
                        />
                     ) : null}
                  </div>
               </div>
               <RecommendedProducts />
            </div>
         </section>
      </BasicLayout>
   );
}
