import Link from 'next/link';
import { size } from 'lodash-es';
import { useState } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import BasicModal from '../../Modal/BasicModal';
import { BASE_PATH } from '../../../utils/constants';
import moment from 'moment';
import 'moment/locale/es-mx';

export default function Order({
   order: {
      product: { title, poster },
      totalPayment,
      createdAt,
      addressShipping,
      charge,
      idPayment,
   },
}) {
   const [showModal, setShowModal] = useState(false);
   let imageUrl = '';

   if (poster === undefined) {
      imageUrl = '/product-default.jpg';
   } else {
      if (size(product.poster.formats) === 4) {
         imageUrl = BASE_PATH + poster.formats.thumbnail.url;
      } else {
         imageUrl = BASE_PATH + poster.url;
      }
   }

   return (
      <>
         <div className="order">
            <div className="order__info">
               <div className="order__info-data">
                  <Image
                     src={imageUrl}
                     alt={title}
                     className="pe-3"
                     onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/product-default.jpg';
                     }}
                  />
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
                     onClick={() => setShowModal(true)}
                  />
               </div>
            </div>
         </div>
         <AddressModal
            showModal={showModal}
            setShowModal={setShowModal}
            addressShipping={addressShipping}
            title={title}
            charge={charge}
            idPayment={idPayment}
         />
      </>
   );
}

function AddressModal({
   showModal,
   setShowModal,
   addressShipping,
   title,
   charge,
   idPayment,
}) {
   return (
      <BasicModal
         show={showModal}
         setShow={setShowModal}
         title={title}
         centered
      >
         <h3>Detalles de envío</h3>
         <p>{addressShipping.title}</p>
         <p>{addressShipping.name}</p>
         <p>{addressShipping.address}</p>
         <p>
            {addressShipping.state}, {addressShipping.city}{' '}
            {addressShipping.postalCode}
         </p>
         <p>{addressShipping.phone}</p>
         <hr />
         <h3>Pago</h3>
         <p>ID: {idPayment.slice(idPayment.length - 10, idPayment.length)}</p>
         <p>
            {charge?.band} **** **** **** {charge?.last4}
         </p>
      </BasicModal>
   );
}
