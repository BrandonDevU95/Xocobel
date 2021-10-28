import { size } from 'lodash';
import { useState, useEffect } from 'react';
import { BASE_PATH } from '../../../utils/constants';
import { Grid, Image, Icon, Button } from 'semantic-ui-react';

export default function HeaderProduct({ product }) {
   return (
      <Grid className="header-product">
         <Grid.Column mobile={16} tablet={6} computer={5}>
            <Image
               src={`${BASE_PATH}${product.poster.url}`}
               alt={product.title}
               fluid
            />
         </Grid.Column>
         <Grid.Column mobile={16} tablet={10} computer={11}>
            <p>Game info</p>
         </Grid.Column>
      </Grid>
   );
}
