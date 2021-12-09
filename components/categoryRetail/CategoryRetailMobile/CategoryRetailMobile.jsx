import { useState } from 'react';
import { map } from 'lodash';
import { Icon } from 'semantic-ui-react';

export default function CategoryRetailMobile({
   categoryRetail,
   setCategory,
   query,
   replace,
}) {
   const [categoryFocus, setCategoryFocus] = useState(null);

   const handleCategory = (url, title) => {
      setCategory(url);
      setCategoryFocus(title);
      if (query.page || query.type) {
         replace('/boutique');
      }
   };

   const handleResetCategory = () => {
      setCategory(null);
      setCategoryFocus(null);
      if (query.page || query.type) {
         replace('/boutique');
      }
   };

   return (
      <li className="nav-item dropdown">
         <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarCategoryRetail"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
         >
            Categorías
         </a>
         <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="navbarCategoryRetail"
         >
            {map(categoryRetail, (category) => (
               <li key={category.url}>
                  <a
                     className="dropdown-item"
                     href="#"
                     onClick={() =>
                        handleCategory(category.url, category.title)
                     }
                  >
                     {category.title}
                  </a>
               </li>
            ))}
         </ul>
         {categoryFocus && (
            <>
               <div className="d-flex justify-content-between align-items-center">
                  <a className="m-0 nav-link disabled">Categoria tipo:</a>
                  <div className="d-flex" onClick={handleResetCategory}>
                     <p style={{ color: '#d37b00' }} className="m-0">
                        {categoryFocus}
                     </p>
                     <Icon
                        name="close"
                        className="ps-2"
                        style={{ color: '#d37b00' }}
                     />
                  </div>
               </div>
            </>
         )}
      </li>
   );
}
