import { BASE_PATH } from '../utils/constants';

export async function getProductsApi(limit, start) {
   try {
      const limitItems = `_limit=${limit}`;
      const sortItems = `_sort=createdAt:desc`;
      const startItems = `_start=${start}`;
      const url = `${BASE_PATH}/products?${limitItems}&${sortItems}&${startItems}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getProductsByCategoryApi(category, limit, start) {
   try {
      const limitItems = `_limit=${limit}`;
      const sortItems = `_sort=createdAt:desc`;
      const startItems = `_start=${start}`;
      const url = `${BASE_PATH}/products?category_retail.url=${category}&${limitItems}&${sortItems}&${startItems}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getTotalProductsByCategoryApi(category) {
   try {
      const url = `${BASE_PATH}/products/count?category_retail.url=${category}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getProductByUrlApi(path) {
   try {
      const url = `${BASE_PATH}/products?url=${path}`;
      const response = await fetch(url);
      const result = await response.json();
      return result[0];
   } catch (error) {
      console.log(error);
      return null;
   }
}
