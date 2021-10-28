import React from 'react';
import { Tab } from 'semantic-ui-react';

export default function TabsProduct({ product }) {
   const panes = [
      {
         menuItem: 'Ingredients',
         render: () => <Tab.Pane>Info ingredients</Tab.Pane>,
      },
      {
         menuItem: 'Nutrition Values',
         render: () => <Tab.Pane>Info nutrients</Tab.Pane>,
      },
   ];

   return <Tab className="tabs-product" panes={panes} />;
}
