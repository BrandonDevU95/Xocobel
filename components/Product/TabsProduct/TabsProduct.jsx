import React from 'react';
import { Tab } from 'semantic-ui-react';

export default function TabsProduct({ product }) {
   const panes = [
      {
         menuItem: 'Ingredientes ',
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
   return (
      <div className="tabs-product__ingredients">
         <h2>{product.title}</h2>
         <h3>{product.ingredients}</h3>
      </div>
   );
}
