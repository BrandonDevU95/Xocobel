import { size, forEach } from 'lodash';
import { useState, useEffect } from 'react';
import BasicLayout from '../layouts/Basic';
import useAuth from '../hooks/useAuth';
import { getFavoriteApi } from '../api/favorite';

export default function wishlist() {
   const { auth, logout } = useAuth();
   const [product, setProduct] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getFavoriteApi(auth.idUser, logout);
         setProduct(response);
      })();
   }, []);

   return (
      <BasicLayout className="wishlist">
         <div className="wishlist__block">
            <div className="title">Lista de deseos</div>
            <div className="data">
               <p>Lista de productos</p>
            </div>
         </div>
      </BasicLayout>
   );
}
