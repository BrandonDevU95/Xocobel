import { size } from 'lodash';
import Seo from '../components/Seo';
import { useRouter } from 'next/router';
import BasicLayout from '../layouts/Basic';
import { Loader } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import ListProducts from '../components/ListProducts';
import TypeChocolate from '../components/typeChocolate';
import CategoryRetail from '../components/categoryRetail';
import { getProductsByCategoryApi } from '../api/products';
import { getTypeChocolateApi } from '../api/type-chocolate';
import RecommendedProducts from '../components/Home/RecommendedProducts';
import TypeChocolateMobile from '../components/typeChocolate/TypeChocolateMobile';
import CategoryRetailMobile from '../components/categoryRetail/CategoryRetailMobile';
import useWindowSize from '../hooks/useWindowSize';
import {
   getCategoryRetailApi,
   getTotalProductsCategoryApi,
} from '../api/category-retail';

export default function Boutique() {
   const { width } = useWindowSize();
   const { query, replace } = useRouter();
   const [category, setCategory] = useState(null);
   const [cleanUrl, setCleanUrl] = useState(false);
   const [products, setProducts] = useState(false);
   const [chocolate, setChocolate] = useState(null);
   const [queryType, setQueryType] = useState(null);
   const [typeChocolate, setTypeChocolate] = useState([]);
   const [categoryRetail, setCategoryRetail] = useState([]);
   const [totalProducts, setTotalProducts] = useState(null);
   const [limitPerPage, setLimitPerPage] = useState(12);
   const btn = document.getElementById(queryType);

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
      if (btn) {
         btn.click();
      }
   }, [btn, query.type]);

   // TODO: Modificar la llamada 2 veces de los productos
   useEffect(() => {
      if (query.type && !query.page) {
         setQueryType(query.type);
         replace(`/boutique`);
      } else {
         replace(`/boutique`);
      }
      setCleanUrl(false);
   }, [cleanUrl, query.type]);

   useEffect(() => {
      (async () => {
         const response = await getCategoryRetailApi();
         if (size(response) > 0) setCategoryRetail(response);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const response = await getTypeChocolateApi();
         if (size(response) > 0) setTypeChocolate(response);
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
      <BasicLayout>
         <Seo title="BOUTIQUE | LO MEJOR EN CHOCOLATES" />
         <section className="boutique">
            <div className="boutique-container container">
               <div className="boutique-container_row row">
                  <div className="boutique-container_row-col col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2">
                     <div className="boutique-container_row-col-computer d-none d-sm-none d-md-block d-lg-block">
                        <h3>Categorías</h3>
                        <CategoryRetail
                           categoryRetail={categoryRetail}
                           setCategory={setCategory}
                           setCleanUrl={setCleanUrl}
                        />
                        <h3>Tipo de Chocolate</h3>
                        <TypeChocolate
                           typeChocolate={typeChocolate}
                           setChocolate={setChocolate}
                           setCleanUrl={setCleanUrl}
                        />
                     </div>
                     <div className="boutique-container_row-col-mobile d-block d-sm-block d-md-none d-lg-none">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                           <div className="container">
                              <a className="navbar-brand" href="#">
                                 Filtros
                              </a>
                              <button
                                 className="navbar-toggler"
                                 type="button"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#navbarChocolate"
                                 aria-controls="navbarChocolate"
                                 aria-expanded="false"
                                 aria-label="Toggle navigation"
                              >
                                 <span className="navbar-toggler-icon"></span>
                              </button>
                              <div
                                 className="collapse navbar-collapse"
                                 id="navbarChocolate"
                              >
                                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li>
                                       <hr className="dropdown-divider" />
                                    </li>
                                    <CategoryRetailMobile
                                       categoryRetail={categoryRetail}
                                       setCategory={setCategory}
                                       setCleanUrl={setCleanUrl}
                                    />
                                    <TypeChocolateMobile
                                       typeChocolate={typeChocolate}
                                       setChocolate={setChocolate}
                                       setCleanUrl={setCleanUrl}
                                    />
                                 </ul>
                              </div>
                           </div>
                        </nav>
                     </div>
                  </div>
                  <div className="boutique-container_row-col-products col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10">
                     {!products && <Loader active>Cargando Productos</Loader>}
                     {products && size(products) === 0 && (
                        <div className="text-center pt-5">
                           <h3 className="h1">No hay productos</h3>
                        </div>
                     )}
                     {size(products) > 0 && (
                        <ListProducts
                           products={products}
                           sizeImg="small"
                           className="justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start"
                        />
                     )}
                     {size(products) > 0 && totalProducts ? (
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
