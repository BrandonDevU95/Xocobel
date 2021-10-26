import Link from 'next/link';
import { map } from 'lodash';
import { Menu } from 'semantic-ui-react';
import BasicLayout from '../layouts/Basic';
import { useEffect, useState } from 'react';
import { getCategoryRetail } from '../api/category-retail';

export default function boutique() {
   const [categoryRetail, setCategoryRetail] = useState([]);

   useEffect(() => {
      (async () => {
         const response = await getCategoryRetail();
         setCategoryRetail(response || []);
      })();
   }, []);

   return (
      <BasicLayout>
         <h1>Boutique</h1>
         <CategoryRetail categoryRetail={categoryRetail} />
      </BasicLayout>
   );
}

function CategoryRetail({ categoryRetail }) {
   return (
      <div>
         {map(categoryRetail, (category) => (
            <Link href={`/boutique/${category.url}`} key={category._id}>
               <Menu.Item as="a" name={category.url}>
                  {category.title}
               </Menu.Item>
            </Link>
         ))}
      </div>
   );
}
