import { useState, useEffect } from 'react';
import { map, forEach, size } from 'lodash';
import { Image, Icon } from 'semantic-ui-react';
import { BASE_PATH } from '../../../utils/constants';
import useCart from '../../../hooks/useCart';

export default function SummaryCart({ products, reloadCart, setReloadCart }) {
   const { removeProductCart } = useCart();
   const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      let price = 0;
      forEach(products, (product) => {
         price += product.totalPrice;
      });
      setTotalPrice(price);
   }, [reloadCart, products]);

   const removeProduct = (product) => {
      removeProductCart(product);
      setReloadCart(true);
   };

   if (!products) return null;

   return (
      <div className="summary-cart py-4">
         <div className="title">Resumen del carrito</div>
         <div className="data">
            <div className="table-responsive">
               <table className="table table-bordered">
                  <thead>
                     <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">P. Unitario</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                     </tr>
                  </thead>
                  <tbody>
                     {map(products, (product) => (
                        <tr className="summary-cart__product" key={product.id}>
                           <td>
                              <Icon
                                 name="close"
                                 link
                                 onClick={() => removeProduct(product.url)}
                              />
                              <Image
                                 src={
                                    size(product.poster.formats) === 4
                                       ? BASE_PATH +
                                         product.poster.formats.small.url
                                       : BASE_PATH + product.poster.url
                                 }
                                 alt={product.title}
                              />
                              {product.title}
                           </td>
                           <td>{product.category_retail?.title}</td>
                           <td>${product.priceDiscount}</td>
                           <td>{product.amount}</td>
                           <td>
                              <span className="price">
                                 $ {product.totalPrice}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
                  <tfoot className="summary-cart__resume">
                     <tr>
                        <td className="clear"></td>
                        <td colSpan="3" className="total">
                           Total:
                        </td>
                        <td className="total-price">
                           ${totalPrice.toFixed(2)}
                        </td>
                     </tr>
                  </tfoot>
               </table>
            </div>
         </div>
      </div>
   );
}
