import { map } from 'lodash';

export default function ListProducts({ products }) {
   return (
      <div className="list-games">
         {map(products, (product) => (
            <h3>{product.title}</h3>
         ))}
      </div>
   );
}
