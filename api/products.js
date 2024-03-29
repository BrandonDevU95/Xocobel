import { BASE_PATH } from '../utils/constants';

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
      const availableCategory = `category_retail.available=true`;
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
         url = `${BASE_PATH}/products?${availableCategory}&${limitItems}&${sortItems}&${startItems}`;
      } else {
         url = `${BASE_PATH}/products?${availableCategory}&${filters}&${limitItems}&${sortItems}&${startItems}`;
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
      const availableCategory = `category_retail.available=true`;
      const url = `${BASE_PATH}/products?${availableCategory}&${popular}&${limitItems}&${sortItems}`;
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
      const availableCategory = `category_retail.available=true`;
      const url = `${BASE_PATH}/products?${availableCategory}&${recommended}&${sortItems}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getGiftsProductsApi(
   category = null,
   chocolate = null,
   limit = 10,
   start = 0
) {
   try {
      let url = '';
      const limitItems = `_limit=${limit}`;
      const sortItems = `_sort=createdAt:desc`;
      const startItems = `_start=${start}`;
      const gift = 'gift=true';
      const availableCategory = `category_retail.available=true`;
      const filters =
         category && chocolate
            ? `category_retail.url=${category}&types_chocolates.url=${chocolate}`
            : category
            ? `category_retail.url=${category}`
            : chocolate
            ? `types_chocolates.url=${chocolate}`
            : '';
      if (!category && !chocolate) {
         url = `${BASE_PATH}/products?${availableCategory}&${gift}&${limitItems}&${sortItems}&${startItems}`;
      } else {
         url = `${BASE_PATH}/products?${availableCategory}&${gift}&${filters}&${limitItems}&${sortItems}&${startItems}`;
      }
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getTotalGiftsApi(category = null, chocolate = null) {
   try {
      let url = '';
      const filters =
         category && chocolate
            ? `category_retail.url=${category}&types_chocolates.url=${chocolate}`
            : category
            ? `category_retail.url=${category}`
            : chocolate
            ? `types_chocolates.url=${chocolate}`
            : '';
      if (!category && !chocolate)
         url = `${BASE_PATH}/products/count?gift=true`;
      else url = `${BASE_PATH}/products/count?gift=true&${filters}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}
