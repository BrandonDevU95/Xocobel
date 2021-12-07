import { BASE_PATH } from '../utils/constants';
import { authFetch } from '../utils/fetch';

export async function getProductsByCategoryApi(
   category = null,
   chocolate = null,
   limit = 10,
   start = 0
) {
   try {
      const limitItems = `_limit=${limit}`;
      const sortItems = `_sort=createdAt:desc`;
      const startItems = `_start=${start}`;
      const filters =
         category && chocolate
            ? `category_retail.url=${category}&types_chocolates.url=${chocolate}`
            : category
            ? `category_retail.url=${category}`
            : chocolate
            ? `types_chocolates.url=${chocolate}`
            : '';
      let url = '';
      if (!category && !chocolate) {
         url = `${BASE_PATH}/products?${limitItems}&${sortItems}&${startItems}`;
      } else {
         url = `${BASE_PATH}/products?${filters}&${limitItems}&${sortItems}&${startItems}`;
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

export async function searchProductsApi(search, limit = 10, start = 0) {
   const limitItems = `_limit=${limit}`;
   const sortItems = `_sort=createdAt:desc`;
   const startItems = `_start=${start}`;

   try {
      const url = `${BASE_PATH}/products?_q=${search}&${limitItems}&${sortItems}&${startItems}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getTotalsearchProductsApi(search) {
   try {
      const url = `${BASE_PATH}/products/count?_q=${search}`;
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

export async function checkStockProductApi(product, amount) {
   try {
      const url = `${BASE_PATH}/products?_id=${product}`;
      const response = await fetch(url);
      const result = await response.json();
      if (result[0].stock > 0 && amount <= result[0].stock) return true;
      else return false;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function discountingStockProductsApi(idProduct, stock, logout) {
   try {
      const url = `${BASE_PATH}/products/${idProduct}`;
      const params = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ stock }),
      };
      const result = await authFetch(url, params, logout);
      if (result.statusCode === 500 || result.statusCode === 400) return false;
      else return true;
   } catch (error) {
      console.log(error);
      return null;
   }
}
