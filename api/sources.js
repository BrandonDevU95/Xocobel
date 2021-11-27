import { BASE_PATH } from '../utils/constants';

export async function getMainBannerApi() {
   try {
      const url = `${BASE_PATH}/sources?url_name=main-banner-promo`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
   } catch (error) {
      console.log(error);
      return null;
   }
}
