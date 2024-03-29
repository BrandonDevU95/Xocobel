import { size } from 'lodash';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import { BASE_PATH } from '../../../utils/constants';
import CarouselScreen from '../CarouselScreen';
import { toast } from 'react-toastify';
import { Image, Icon, Button, Input } from 'semantic-ui-react';
import TabsProduct from '../TabsProduct';
import {
   isFavoriteApi,
   addFavoriteApi,
   deleteFavoriteApi,
} from '../../../api/favorite';

export default function HeaderProduct({ product }) {
   let imgUrl = '';

   if (product.poster === undefined) {
      imgUrl = `/product-default.jpg`;
   } else {
      if (size(product.poster.formats) === 4) {
         imgUrl = BASE_PATH + product.poster.formats.large.url;
      } else {
         imgUrl = BASE_PATH + product.poster.url;
      }
   }

   return (
      <div className="header-product row">
         <div className="col-12 col-md-4 col-lg-5 order-2 order-md-1 order-lg-1">
            <Image
               src={imgUrl}
               alt={product.title}
               fluid
               onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/product-default.jpg';
               }}
            />
            {size(product.galery) >= 2 && (
               <CarouselScreen
                  title={product.title}
                  screenShots={product.galery}
                  propBorder="bordeCarousel"
               />
            )}
         </div>
         <div className="col-12 col-md-8 col-lg-7 order-1 order-md-2 order-lg-2">
            <Info product={product} />
            <TabsProduct product={product} />
         </div>
      </div>
   );
}

function Info({ product }) {
   const { auth, logout } = useAuth();
   const { addProductCart } = useCart();
   const [loading, setLoading] = useState(false);
   const [amount, setAmount] = useState(1);
   const [isFavorite, setIsFavorite] = useState(false);
   const [reloadFavorite, setReloadFavorite] = useState(false);

   useEffect(() => {
      (async () => {
         const response = await isFavoriteApi(auth?.idUser, product.id, logout);
         if (size(response) > 0) setIsFavorite(true);
         else setIsFavorite(false);
      })();
      setReloadFavorite(false);
   }, [product, reloadFavorite]);

   const addFavorite = async () => {
      if (auth) {
         setLoading(true);
         await addFavoriteApi(auth?.idUser, product.id, logout);
         setReloadFavorite(true);
         setLoading(false);
      } else {
         toast.warning('Debes iniciar sesión para poder agregar a favoritos');
      }
   };

   const removeFavorite = async () => {
      if (auth) {
         setLoading(true);
         await deleteFavoriteApi(auth?.idUser, product.id, logout);
         setReloadFavorite(true);
         setLoading(false);
      }
   };

   const handleMore = () => {
      setAmount(amount + 1);
   };

   const handleLess = () => {
      if (amount >= 1) setAmount(amount - 1);
   };

   return (
      <>
         <div className="header-product__title">
            <h6>{product.title}</h6>
            <Icon
               name={isFavorite ? 'heart' : 'heart outline'}
               className={classNames({
                  like: isFavorite,
               })}
               link
               disabled={loading}
               onClick={isFavorite ? removeFavorite : addFavorite}
            />
         </div>
         <div className="header-product__delivery">
            Entrega aproximada 3 días
         </div>
         <div
            className="header-product__description"
            dangerouslySetInnerHTML={{ __html: product.description }}
         />
         <div className="header-product__amount">
            <Input type="text" placeholder="1" action>
               <Button
                  type="button"
                  disabled={amount === 0}
                  onClick={handleLess}
                  className="header-product__amount-less"
               >
                  <Icon name="minus" />
               </Button>
               <input disabled value={amount} />
               <Button
                  type="button"
                  onClick={handleMore}
                  className="header-product__amount-more"
               >
                  <Icon name="add" />
               </Button>
            </Input>
         </div>
         <div className="header-product__buy">
            <div className="header-product__buy-price">
               {product.discount > 0 ? (
                  <>
                     <p>Precio de venta al público: ${product.price}</p>
                     <div className="header-product__buy-price-actions">
                        <p>-{product.discount}%</p>
                        {amount === 0 ? (
                           <p style={{ marginLeft: '1rem' }}>
                              $
                              {(
                                 product.price -
                                 Math.floor(product.price * product.discount) /
                                    100
                              ).toFixed(2)}
                           </p>
                        ) : (
                           <p style={{ marginLeft: '1rem' }}>
                              $
                              {(
                                 (product.price -
                                    Math.floor(
                                       product.price * product.discount
                                    ) /
                                       100) *
                                 amount
                              ).toFixed(2)}
                           </p>
                        )}
                     </div>
                  </>
               ) : (
                  <div className="header-product__buy-price-actions">
                     {amount === 0 ? (
                        <p>
                           $
                           {(
                              product.price -
                              Math.floor(product.price * product.discount) / 100
                           ).toFixed(2)}
                        </p>
                     ) : (
                        <p>
                           $
                           {(
                              (product.price -
                                 Math.floor(product.price * product.discount) /
                                    100) *
                              amount
                           ).toFixed(2)}
                        </p>
                     )}
                  </div>
               )}
            </div>
            <Button
               className="header-product__buy-button"
               disabled={amount === 0}
               onClick={() => addProductCart(product.url, amount)}
            >
               Comprar
            </Button>
         </div>
      </>
   );
}
