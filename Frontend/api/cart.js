import { BASE_PATH, CART } from '../utils/constants';

export function getProductsCart() {
   const cart = localStorage.getItem(CART);

   if (!cart) {
      return null;
   } else {
      const products = cart.split(',');
      return products;
   }
}
