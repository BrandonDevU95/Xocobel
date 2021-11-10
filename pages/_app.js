import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';
import { useMemo, useState, useEffect } from 'react';
import { setToken, getToken, removeToken } from '../api/token';
import CartContext from '../context/CartContext';
import {
   getProductsCart,
   addProductCart,
   countProductsCart,
   removeProductCart,
   removeAllProductsCart,
} from '../api/cart';

// Styles
import '../sass/global.scss';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const [auth, setAuth] = useState(undefined);
   const [reloadCart, setReloadCart] = useState(false);
   const [reloadUser, setReloadUser] = useState(false);
   const [totalProductsCart, setTotalProductsCart] = useState(0);

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
      setReloadUser(false);
   }, [reloadUser]);

   useEffect(() => {
      setTotalProductsCart(countProductsCart());
      setReloadCart(false);
   }, [reloadCart, auth]);

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

   const addProduct = (product, amount) => {
      const token = getToken();
      if (token) {
         addProductCart(product, amount);
         setReloadCart(true);
      } else {
         toast.warning('Debe iniciar sesión para agregar productos al carrito');
      }
   };

   const removeProduct = (product) => {
      removeProductCart(product);
      setReloadCart(true);
   };

   const clearProductsCart = () => {
      // FIXME: Reparar la alerta de componente desmontado del carrito
      removeAllProductsCart();
      setReloadCart(true);
   };

   const cartData = useMemo(
      () => ({
         productsCart: totalProductsCart,
         addProductCart: (product, amount) => addProduct(product, amount),
         getProductsCart,
         removeProductCart: (product) => removeProduct(product),
         clearProductsCart,
      }),
      [totalProductsCart]
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