import Link from 'next/link';
import { useState } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import BasicModal from '../../Modal/BasicModal';
import { BASE_PATH } from '../../../utils/constants';
import moment from 'moment';
import 'moment/locale/es-mx';

export default function Order({
   order: {
      product: { title, poster, url },
      totalPaymet,
      createdAt,
      addressShiping,
   },
}) {
   return (
      <>
         <div className="order">
            <div className="order__info">
               <Link href={`/${url}`}>
                  <a>
                     <Image src={`${BASE_PATH}${poster.url}`} alt={title} />
                  </a>
               </Link>
            </div>
         </div>
      </>
   );
}
