import { BASE_PATH } from '../utils/constants';

export async function getCategoryRetailApi() {
   try {
      const url = `${BASE_PATH}/category-retails`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}

export async function getTotalProductsCategoryApi(category = null) {
   try {
      let url = '';
      if (!category) url = `${BASE_PATH}/products/count`;
      else url = `${BASE_PATH}/products/count?category_retail.url=${category}`;

      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}
