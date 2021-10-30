import { BASE_PATH, CART } from '../utils/constants';
import { size, includes, remove } from 'lodash';
import { toast } from 'react-toastify';

export function getProductsCart() {
   const cart = localStorage.getItem(CART);

   if (!cart) {
      return null;
   } else {
      const products = cart.split(',');
      return products;
   }
}

export function addProductCart(product) {
   const cart = getProductsCart();

   if (!cart) {
      localStorage.setItem(CART, product);
      toast.success('Producto añadido al carrito');
   } else {
      const productFound = includes(cart, product);
      if (productFound) {
         toast.warning('Producto ya existe en el carrito');
      } else {
         cart.push(product);
         localStorage.setItem(CART, cart);
         toast.success('Producto añadido al carrito');
      }
   }
}
