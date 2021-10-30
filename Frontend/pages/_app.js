import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import AuthContext from '../context/AuthContext';
import { useMemo, useState, useEffect } from 'react';
import { setToken, getToken, removeToken } from '../api/token';
import CartContext from '../context/CartContext';
import { getProductsCart } from '../api/cart';

// Styles
import '../sass/global.scss';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const [auth, setAuth] = useState(undefined);
   const [reloadUser, setReloadUser] = useState(false);

   useEffect(() => {
      const token = getToken();

      if (token) {
         setAuth({
            token,
            idUser: jwtDecode(token).id,
         });
      } else {
         setAuth(null);
      }
   }, [reloadUser]);

   const login = (token) => {
      setToken(token);
      setAuth({
         token,
         idUser: jwtDecode(token).id,
      });
   };

   const logout = () => {
      if (auth) {
         removeToken();
         setAuth(null);
         router.push('/');
      }
   };

   const authData = useMemo(
      () => ({
         auth,
         login,
         logout,
         setReloadUser,
      }),
      [auth]
   );

   const cartData = useMemo(
      () => ({
         productsCart: 0,
         addProductCart: () => null,
         getProductsCart,
         removeProductCart: () => null,
         clearProductsCart: () => null,
      }),
      []
   );

   if (auth === undefined) return null;

   return (
      <AuthContext.Provider value={authData}>
         <CartContext.Provider value={cartData}>
            <Component {...pageProps} />
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar
               newestOnTop
               closeOnClick
               rtl={false}
               pauseOnFocusLoss={false}
               draggable
               pauseOnHover
            />
         </CartContext.Provider>
      </AuthContext.Provider>
   );
}
