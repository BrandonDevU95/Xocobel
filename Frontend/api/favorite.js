import { size } from 'lodash';
import { authFetch } from '../utils/fetch';
import { BASE_PATH } from '../utils/constants';

export async function isFavoriteApi(idUser, idProduct, logout) {
   try {
      const url = `${BASE_PATH}/favorites?user=${idUser}&product=${idProduct}`;
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
            body: JSON.stringify({ user: idUser, product: idProduct }),
         };
         const result = await authFetch(url, params, logout);
         return result;
      }
   } catch (error) {
      console.log(error);
      return null;
   }
}
