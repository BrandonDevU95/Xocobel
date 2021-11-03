import { map } from 'lodash';
import Link from 'next/link';
import { Menu } from 'semantic-ui-react';

export default function CategoryRetail({ categoryRetail }) {
   return (
      <Menu fluid vertical tabular className="category-retail">
         {map(categoryRetail, (category) => (
            <Link href={`/boutique/${category.url}`} key={category._id}>
               <Menu.Item as="a" name={category.url}>
                  {category.title}
               </Menu.Item>
            </Link>
         ))}
      </Menu>
   );
}
