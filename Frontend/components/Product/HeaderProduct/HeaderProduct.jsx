import { size } from 'lodash';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { BASE_PATH } from '../../../utils/constants';
import { Grid, Image, Icon, Button } from 'semantic-ui-react';
import {
   isFavoriteApi,
   addFavoriteApi,
   deleteFavoriteApi,
} from '../../../api/favorite';

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
            <Info product={product} />
         </Grid.Column>
      </Grid>
   );
}

function Info({ product }) {
   const { auth, logout } = useAuth();
   const [isFavorite, setIsFavorite] = useState(false);
   const [reloadFavorite, setReloadFavorite] = useState(false);

   useEffect(() => {
      (async () => {
         const response = await isFavoriteApi(auth.idUser, product.id, logout);
         if (size(response) > 0) setIsFavorite(true);
         else setIsFavorite(false);
      })();
      setReloadFavorite(false);
   }, [product, reloadFavorite]);

   const addFavorite = async () => {
      if (auth) {
         //TODO: Bloquear icno hasta que se complete la peticion
         await addFavoriteApi(auth.idUser, product.id, logout);
         setReloadFavorite(true);
      }
   };

   const removeFavorite = async () => {
      if (auth) {
         //TODO: Bloquear icno hasta que se complete la peticion
         await deleteFavoriteApi(auth.idUser, product.id, logout);
         setReloadFavorite(true);
      }
   };

   return (
      <>
         <div className="header-product__title">
            {product.title}
            <Icon
               name={isFavorite ? 'heart' : 'heart outline'}
               className={classNames({
                  like: isFavorite,
               })}
               link
               onClick={isFavorite ? removeFavorite : addFavorite}
            />
         </div>
         <div className="header-product__delivery">Entrega en 24/48 horas</div>
         <div
            className="header-product__description"
            dangerouslySetInnerHTML={{ __html: product.description }}
         />
         <div className="header-product__buy">
            <div className="header-product__buy-price">
               <p>Precio de venta al publico: ${product.price}</p>
               <div className="header-product__buy-price-actions">
                  <p>-{product.discount}%</p>
                  <p>
                     $
                     {product.price -
                        Math.floor(product.price * product.discount) / 100}
                  </p>
               </div>
            </div>
            <Button className="header-product__buy-button">Comprar</Button>
         </div>
      </>
   );
}
