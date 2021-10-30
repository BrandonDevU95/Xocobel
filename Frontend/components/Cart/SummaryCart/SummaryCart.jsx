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
         price += product.price;
      });
      setTotalPrice(price);
   }, [reloadCart, products]);

   const removeProduct = (product) => {
      removeProductCart(product);
      setReloadCart(true);
   };

   return (
      <div className="summary-cart">
         <div className="title">Resumen del Carrito</div>
         <div className="data">
            <Table celled structured>
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell>Producto</Table.HeaderCell>
                     <Table.HeaderCell>Categoria</Table.HeaderCell>
                     <Table.HeaderCell>Entrega</Table.HeaderCell>
                     <Table.HeaderCell>Precio</Table.HeaderCell>
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
                        <Table.Cell>{product.category_retail.title}</Table.Cell>
                        <Table.Cell>Inmediata</Table.Cell>
                        <Table.Cell>
                           <span className="price">$ {product.price}</span>
                        </Table.Cell>
                     </Table.Row>
                  ))}
                  <Table.Row className="summary-cart__resume">
                     <Table.Cell className="clear" />
                     <Table.Cell colSpan="2">Total:</Table.Cell>
                     <Table.Cell className="total-price">
                        ${totalPrice.toFixed(2)}
                     </Table.Cell>
                  </Table.Row>
               </Table.Body>
            </Table>
         </div>
      </div>
   );
}
