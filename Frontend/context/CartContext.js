import { createContext } from 'react';

const CartContext = createContext({
   productsCart: 0,
   addProductCart: () => null,
   getProductsCart: () => null,
   removeProductCart: () => null,
   clearProductsCart: () => null,
});

export default CartContext;
