import { map } from 'lodash';
import { useState } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

export default function CategoryRetail({
   typeChocolate,
   setChocolate,
   setCleanUrl,
}) {
   const [typeFocus, setTypeFocus] = useState(null);

   const handleCategory = (url, title) => {
      setChocolate(url);
      setTypeFocus(title);
      setCleanUrl(true);
   };

   const handleResetCategory = () => {
      setChocolate(null);
      setTypeFocus(null);
      setCleanUrl(true);
   };

   return (
      <Menu fluid vertical tabular className="category-retail">
         {map(typeChocolate, (category) => (
            <Button
               basic
               onClick={() => handleCategory(category.url, category.title)}
               key={category._id}
               id={category.url}
            >
               {category.title}
            </Button>
         ))}
         {typeFocus && (
            <div className="category-retail_filter">
               <p>Filter:</p>
               <div className="filter">
                  <Button basic>{typeFocus}</Button>
                  <Icon name="close" onClick={handleResetCategory} />
               </div>
            </div>
         )}
      </Menu>
   );
}
