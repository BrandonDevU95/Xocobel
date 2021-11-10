import { BASE_PATH, CART, AMOUNT } from '../utils/constants';
import { size, includes, remove } from 'lodash';
import { toast } from 'react-toastify';
import { authFetch } from '../utils/fetch';

export function getProductsCart() {
   const cart = localStorage.getItem(CART);

   if (!cart) {
      return null;
   } else {
      const products = JSON.parse(cart);
      return products;
   }
}

function findCartProduct(product) {
   const cart = getProductsCart();
   let response = false;
   cart.forEach((element) => {
      if (element.product == product) response = true;
   });
   return response;
}

export function addProductCart(product, amount = 1) {
   const cart = getProductsCart();

   if (!cart) {
      localStorage.setItem(CART, JSON.stringify([{ product, amount }]));
      toast.success('Producto añadido al carrito');
   } else {
      const productFound = findCartProduct(product);
      if (productFound) {
         toast.warning('Producto ya existe en el carrito');
      } else {
         cart.push({ product, amount });
         localStorage.setItem(CART, JSON.stringify(cart));
         toast.success('Producto añadido al carrito');
      }
   }
}

export function countProductsCart() {
   const cart = getProductsCart();

   if (!cart) {
      return 0;
   } else {
      return size(cart);
   }
}

export function removeProductCart(product) {
   const cart = getProductsCart();
   if (cart) {
      remove(cart, (item) => {
         return item.product === product;
      });
      if (size(cart) > 0) localStorage.setItem(CART, JSON.stringify(cart));
      else localStorage.removeItem(CART);
   }
}

export async function paymentCartApi(token, products, idUser, address, logout) {
   try {
      const addressShipping = address;
      delete addressShipping.user;
      delete addressShipping.createdAt;

      const url = `${BASE_PATH}/orders`;
      const params = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            token,
            products,
            idUser,
            addressShipping,
         }),
      };
      const result = await authFetch(url, params, logout);
      return result;
   } catch (error) {
      console.log(error);
      return error;
   }
}

export function removeAllProductsCart() {
   localStorage.removeItem(CART);
}
