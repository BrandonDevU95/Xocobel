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

export async function getTotalProductsCategoryApi(
   category = null,
   chocolate = null
) {
   try {
      const filters =
         category && chocolate
            ? `category_retail.url=${category}&types_chocolate.url=${chocolate}`
            : category
            ? `category_retail.url=${category}`
            : chocolate
            ? `types_chocolate.url=${chocolate}`
            : '';
      let url = '';
      if (!category) url = `${BASE_PATH}/products/count`;
      else url = `${BASE_PATH}/products/count?${filters}`;

      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}
