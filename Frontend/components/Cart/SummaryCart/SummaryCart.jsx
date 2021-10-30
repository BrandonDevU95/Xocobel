import { useState, useEffect } from 'react';
import { map, forEach } from 'lodash';
import { Table, Image, Icon } from 'semantic-ui-react';
import { BASE_PATH } from '../../../utils/constants';
import useCart from '../../../hooks/useCart';

export default function SummaryCart({ products }) {
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
                              onClick={() => console.log('Borrar')}
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
               </Table.Body>
            </Table>
         </div>
      </div>
   );
}
