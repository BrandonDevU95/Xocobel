import { BASE_PATH } from '../utils/constants';

export async function getProductsByCategoryApi(
   category = null,
   limit = 10,
   start = 0
) {
   try {
      const limitItems = `_limit=${limit}`;
      const sortItems = `_sort=createdAt:desc`;
      const startItems = `_start=${start}`;
      let url = '';
      if (!category) {
         url = `${BASE_PATH}/products?${limitItems}&${sortItems}&${startItems}`;
      } else {
         url = `${BASE_PATH}/products?category_retail.url=${category}&${limitItems}&${sortItems}&${startItems}`;
      }

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

export async function searcgProductsApi(search) {
   try {
      const url = `${BASE_PATH}/products?_q=${search}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getPopularProductsApi() {
   try {
      const popular = 'popular=true';
      const limitItems = `_limit=5`;
      const sortItems = `_sort=createdAt:desc`;
      const url = `${BASE_PATH}/products?${popular}&${limitItems}&${sortItems}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getRecommendedProductsApi() {
   try {
      const recommended = 'recommended=true';
      const sortItems = `_sort=createdAt:desc`;
      const url = `${BASE_PATH}/products?${recommended}&${sortItems}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getGiftsProductsApi(limit, start) {
   try {
      const limitItems = `_limit=${limit}`;
      const sortItems = `_sort=createdAt:desc`;
      const startItems = `_start=${start}`;
      const gift = 'gift=true';
      const url = `${BASE_PATH}/products?${gift}&${limitItems}&${sortItems}&${startItems}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getTotalGiftsApi() {
   try {
      const url = `${BASE_PATH}/products/count?gift=true`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function checkStockProductApi(product) {
   try {
      const url = `${BASE_PATH}/products?_id=${product}`;
      const response = await fetch(url);
      const result = await response.json();
      if (result[0].stock > 0) return true;
      else return false;
   } catch (error) {
      console.log(error);
      return null;
   }
}
