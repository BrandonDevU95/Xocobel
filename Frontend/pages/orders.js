import { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import useAuth from '../hooks/useAuth';
import { getOrdersApi } from '../api/order';

import BasicLayout from '../layouts/Basic';

export default function Orders() {
   const { auth, logout } = useAuth();
   const [order, setOrder] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getOrdersApi(auth.idUser);
         setOrder(response || []);
      })();
   }, []);

   return (
      <BasicLayout className="orders">
         <div className="orders__block">
            <div className="title">Mis pedidos</div>
            <div className="data">
               <p>Lista de pedidos</p>
            </div>
         </div>
      </BasicLayout>
   );
}
