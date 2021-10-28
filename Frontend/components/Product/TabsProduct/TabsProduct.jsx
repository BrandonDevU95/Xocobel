import React from 'react';
import { Tab } from 'semantic-ui-react';

export default function TabsProduct({ product }) {
   const panes = [
      {
         menuItem: 'Ingredients',
         render: () => (
            <Tab.Pane>
               <IngredientsTab product={product} />{' '}
            </Tab.Pane>
         ),
      },
      {
         menuItem: 'Nutrition Values',
         render: () => (
            <Tab.Pane>
               {' '}
               <NutritionValuesTab product={product} />{' '}
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

function NutritionValuesTab({ product }) {
   return (
      <div className="tabs-product__nutrition">
         <h2>{product.title}</h2>
         <h3>{product.nutrition}</h3>
      </div>
   );
}
