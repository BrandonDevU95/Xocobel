import { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import useAuth from '../hooks/useAuth';
import { getOrdersApi } from '../api/order';
import { map, size } from 'lodash';
import Order from '../components/Orders/Order';
import BasicLayout from '../layouts/Basic';
import Seo from '../components/Seo';

export default function Orders() {
   const { auth, logout } = useAuth();
   const [orders, setOrders] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getOrdersApi(auth.idUser);
         setOrders(response || []);
      })();
   }, []);

   return (
      <BasicLayout className="orders">
         <Seo title="Mis pedidos" />
         <div className="orders__block">
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
         </div>
      </BasicLayout>
   );
}

function OrdersList({ orders }) {
   return (
      <Grid>
         {map(orders, (order, index) => (
            <Grid.Column key={index} mobile={16} tablet={6} computer={8}>
               <Order order={order} />
            </Grid.Column>
         ))}
      </Grid>
   );
}
