import React from 'react';
import { Tab } from 'semantic-ui-react';

export default function TabsProduct({ product }) {
   const panes = [
      {
         menuItem: 'Ingredientes',
         render: () => (
            <Tab.Pane>
               <IngredientsTab product={product} />
            </Tab.Pane>
         ),
      },
   ];

   return <Tab className="tabs-product" panes={panes} />;
}

function IngredientsTab({ product }) {
   if (product.ingredients) {
      return (
         <div className="tabs-product__ingredients">
            <h3>{product.ingredients}</h3>
         </div>
      );
   } else {
      return (
         <div className="tabs-product__ingredients">
            <h3>No hay ingredientes</h3>
         </div>
      );
   }
}
