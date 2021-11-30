import { BASE_PATH } from '../utils/constants';
import { authFetch } from '../utils/fetch';

export async function getOrdersApi(idUser, logout, limit = 10, start = 0) {
   const limitItems = `_limit=${limit}`;
   const sortItems = `_sort=createdAt:desc`;
   const startItems = `_start=${start}`;

   try {
      const url = `${BASE_PATH}/orders?users_permissions_user=${idUser}&${limitItems}&${sortItems}&${startItems}`;
      const result = authFetch(url, null, logout);
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getTotalOrdersApi(idUser, logout) {
   try {
      const url = `${BASE_PATH}/orders/count?users_permissions_user=${idUser}`;
      const result = authFetch(url, null, logout);
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}
