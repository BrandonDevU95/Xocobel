import { useState } from 'react';
import { map } from 'lodash';
import { Icon } from 'semantic-ui-react';

export default function TypeChocolateMobile({
   typeChocolate,
   setChocolate,
   setCleanUrl,
}) {
   const [categoryFocus, setCategoryFocus] = useState(null);

   const handleCategory = (url, title) => {
      setChocolate(url);
      setCategoryFocus(title);
      setCleanUrl(true);
   };

   const handleResetCategory = () => {
      setChocolate(null);
      setCategoryFocus(null);
      setCleanUrl(true);
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
            Chocolate
         </a>
         <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="navbarCategoryRetail"
         >
            {map(typeChocolate, (chocolate) => (
               <li key={chocolate.url}>
                  <a
                     className="dropdown-item"
                     href="#"
                     onClick={() =>
                        handleCategory(chocolate.url, chocolate.title)
                     }
                  >
                     {chocolate.title}
                  </a>
               </li>
            ))}
         </ul>
         {categoryFocus && (
            <>
               <div className="d-flex justify-content-between align-items-center">
                  <a className="m-0 nav-link disabled">Chocolate tipo:</a>
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
