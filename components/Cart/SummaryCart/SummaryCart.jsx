import { useState, useEffect } from 'react';
import { map, forEach } from 'lodash';
import { Table, Image, Icon, Tab } from 'semantic-ui-react';
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
      <div className="summary-cart">
         <div className="title">Resumen del Carrito</div>
         <div className="data">
            <Table celled structured>
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell>Producto</Table.HeaderCell>
                     <Table.HeaderCell>Categoría</Table.HeaderCell>
                     <Table.HeaderCell>P. Unitario</Table.HeaderCell>
                     <Table.HeaderCell>Cantidad</Table.HeaderCell>
                     <Table.HeaderCell>Total</Table.HeaderCell>
                  </Table.Row>
               </Table.Header>
               <Table.Body>
                  {map(products, (product) => (
                     <Table.Row
                        key={product.id}
                        className="summary-cart__product"
                     >
                        <Table.Cell>
                           <Icon
                              name="close"
                              link
                              onClick={() => removeProduct(product.url)}
                           />
                           <Image
                              src={`${BASE_PATH}${product.poster.url}`}
                              alt={product.title}
                           />
                           {product.title}
                        </Table.Cell>
                        <Table.Cell>
                           {product.category_retail?.title}
                        </Table.Cell>
                        <Table.Cell>${product.priceDiscount}</Table.Cell>
                        <Table.Cell>{product.amount}</Table.Cell>
                        <Table.Cell>
                           <span className="price">$ {product.totalPrice}</span>
                        </Table.Cell>
                     </Table.Row>
                  ))}
                  <Table.Row className="summary-cart__resume">
                     <Table.Cell className="clear" />
                     <Table.Cell colSpan="3">Total:</Table.Cell>
                     <Table.Cell className="total-price">
                        ${totalPrice}
                     </Table.Cell>
                  </Table.Row>
               </Table.Body>
            </Table>
         </div>
      </div>
   );
}
