import { size } from 'lodash';
import { authFetch } from '../utils/fetch';
import { BASE_PATH } from '../utils/constants';

export async function isFavoriteApi(idUser, idProduct, logout) {
   try {
      const url = `${BASE_PATH}/favorites?users_permissions_user=${idUser}&product=${idProduct}`;
      return await authFetch(url, null, logout);
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function addFavoriteApi(idUser, idProduct, logout) {
   try {
      const dataFound = await isFavoriteApi(idUser, idProduct, logout);
      if (size(dataFound) > 0 || !dataFound) {
         return 'Este producto ya esta en lista de favoritos';
      } else {
         const url = `${BASE_PATH}/favorites`;
         const params = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               users_permissions_user: idUser,
               product: idProduct,
            }),
         };
         const result = await authFetch(url, params, logout);
         return result;
      }
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function deleteFavoriteApi(idUser, idProduct, logout) {
   try {
      const dataFound = await isFavoriteApi(idUser, idProduct, logout);
      if (size(dataFound) > 0 || !dataFound) {
         const url = `${BASE_PATH}/favorites/${dataFound[0]?._id}`;
         const params = {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
            },
         };
         const result = await authFetch(url, params, logout);
         return result;
      } else {
         return 'Este producto no esta en lista de favoritos';
      }
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getFavoriteApi(idUser, logout, limit = 10, start = 0) {
   const limitItems = `_limit=${limit}`;
   const sortItems = `_sort=createdAt:desc`;
   const startItems = `_start=${start}`;
   try {
      const url = `${BASE_PATH}/favorites?users_permissions_user=${idUser}&${limitItems}&${sortItems}&${startItems}`;
      const result = await authFetch(url, null, logout);
      const newResult = [];
      for await (const item of result) {
         if (item.product.category_retail !== null) {
            const result = await fetch(
               `${BASE_PATH}/products/${item.product.id}`
            );
            const data = await result.json();
            if (data.category_retail.available === true) {
               newResult.push(item);
            }
         }
      }
      return newResult;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getTotalFavoriteApi(idUser, logout) {
   try {
      const url = `${BASE_PATH}/favorites/count?users_permissions_user=${idUser}`;
      const result = await authFetch(url, null, logout);
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}
