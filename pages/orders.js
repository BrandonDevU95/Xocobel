import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { getOrdersApi, getTotalOrdersApi } from '../api/order';
import { map, size } from 'lodash';
import Order from '../components/Orders/Order';
import BasicLayout from '../layouts/Basic';
import Seo from '../components/Seo';
import { useRouter } from 'next/router';
import Pagination from '../components/Pagination';

const limitPerPage = 10;

export default function Orders() {
   const { auth, logout } = useAuth();
   const { query } = useRouter();
   const [orders, setOrders] = useState(null);
   const [totalProducts, setTotalProducts] = useState(null);

   const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
   };

   useEffect(() => {
      (async () => {
         const response = await getOrdersApi(
            auth.idUser,
            logout,
            limitPerPage,
            getStartItem()
         );
         setOrders(response || []);
      })();
   }, [query]);

   useEffect(() => {
      (async () => {
         const response = await getTotalOrdersApi(auth.idUser);
         setTotalProducts(response);
      })();
   }, []);

   return (
      <BasicLayout className="orders">
         <Seo title="Mis pedidos" />
         <section className="orders-container py-4">
            <div className="orders-container__block container">
               <div className="title">Mis pedidos</div>
               <div className="data">
                  {size(orders) === 0 ? (
                     <h2 style={{ textAlign: 'center' }}>
                        No tienes compras realizadas
                     </h2>
                  ) : (
                     <OrdersList orders={orders} />
                  )}
               </div>
               {size(orders) > 0 && totalProducts ? (
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

function OrdersList({ orders }) {
   return (
      <div className="row">
         {map(orders, (order, index) => (
            <div className="col-12 col-md-6 col-lg-6 py-1" key={index}>
               <Order order={order} />
            </div>
         ))}
      </div>
   );
}
