import { map } from 'lodash';
import { useState } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

export default function CategoryRetail({
   categoryRetail,
   setCategory,
   setCleanUrl,
}) {
   const [categoryFocus, setCategoryFocus] = useState(null);

   const handleCategory = (url, title) => {
      setCategory(url);
      setCategoryFocus(title);
      setCleanUrl(true);
   };

   const handleResetCategory = () => {
      setCategory(null);
      setCategoryFocus(null);
      setCleanUrl(true);
   };

   return (
      <Menu fluid vertical tabular className="category-retail">
         {map(categoryRetail, (category) => (
            <Button
               basic
               onClick={() => handleCategory(category.url, category.title)}
               key={category._id}
            >
               {category.title}
            </Button>
         ))}
         {categoryFocus && (
            <div className="category-retail_filter">
               <p>Filter:</p>
               <div className="filter">
                  <Button basic>{categoryFocus}</Button>
                  <Icon name="close" onClick={handleResetCategory} />
               </div>
            </div>
         )}
      </Menu>
   );
}
