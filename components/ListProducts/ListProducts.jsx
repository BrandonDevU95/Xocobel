import classNames from 'classnames';
import { map, size } from 'lodash';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Icon, Image } from 'semantic-ui-react';
import {
   addFavoriteApi,
   deleteFavoriteApi,
   isFavoriteApi,
} from '../../api/favorite';
import useAuth from '../../hooks/useAuth';
import { BASE_PATH } from '../../utils/constants';

export default function ListProducts({
   products,
   sizeImg = 'thumbnail',
   className,
}) {
   return (
      <div className="list-products">
         <div
            className={classNames('list-products_row row', {
               [className]: className,
            })}
         >
            {map(products, (product) => (
               <Product key={product._id} product={product} sizeImg={sizeImg} />
            ))}
         </div>
      </div>
   );
}

function Product({ product, sizeImg }) {
   let imgUrl;
   const { auth, logout } = useAuth();
   const [loading, setLoading] = useState(false);
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

   if (size(product.poster.formats) === 4) {
      imgUrl =
         sizeImg === 'large'
            ? BASE_PATH + product.poster.formats.large.url
            : sizeImg === 'medium'
            ? BASE_PATH + product.poster.formats.medium.url
            : sizeImg === 'small'
            ? BASE_PATH + product.poster.formats.small.url
            : sizeImg === 'thumbnail'
            ? BASE_PATH + product.poster.formats.thumbnail.url
            : '';
   } else {
      imgUrl = BASE_PATH + product.poster.url;
   }

   return (
      <div className="list-products_row-col col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
         <div className="list-products_row-col__product">
            <Icon
               name={isFavorite ? 'heart' : 'heart outline'}
               className={classNames({
                  like: isFavorite,
               })}
               link
               disabled={loading}
               onClick={isFavorite ? removeFavorite : addFavorite}
            />
            <div className="list-products_row-col__product-hover">
               <Link href={`/${product.url}`}>
                  <a>
                     <div className="list-products_row-col__product-poster">
                        <Image src={imgUrl} alt={product.title} fluid />
                        <div className="list-products_row-col__product-poster-info">
                           {product.discount ? (
                              <span className="discount">
                                 -{product.discount}%
                              </span>
                           ) : (
                              <span />
                           )}
                           <span className="price">${product.price}</span>
                        </div>
                     </div>
                     <h2>{product.title}</h2>
                  </a>
               </Link>
            </div>
         </div>
      </div>
   );
}
