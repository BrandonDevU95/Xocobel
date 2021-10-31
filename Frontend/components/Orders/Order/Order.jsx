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
      totalPayment,
      createdAt,
      addressShiping,
   },
}) {
   return (
      <>
         <div className="order">
            <div className="order__info">
               <div className="order__info-data">
                  <Link href={`/${url}`}>
                     <a>
                        <Image src={`${BASE_PATH}${poster.url}`} alt={title} />
                     </a>
                  </Link>
                  <div>
                     <h2>{title}</h2>
                     <p>${totalPayment}</p>
                  </div>
               </div>
               <div className="order__info-other">
                  <p className="order__info-other-date">
                     {moment(createdAt).format('L')} -{' '}
                     {moment(createdAt).format('LT')}
                  </p>
                  <Icon
                     name="eye"
                     circular
                     link
                     onClick={() => console.log('Info')}
                  />
               </div>
            </div>
         </div>
      </>
   );
}
