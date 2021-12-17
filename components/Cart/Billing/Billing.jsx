import { upperCase } from 'lodash';
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function Billing() {
   const [bill, setBill] = useState(false);
   const [useAddress, setUseAddress] = useState(true);
   const [rfc, setRfc] = useState(null);

   return (
      <div className="billing py-4">
         <div className="title">Facturación</div>
         <div className="data">
            <div className="row">
               <div className="col-12 col-md-8">
                  <p className="h3 pb-2">¿Necesitas facturar tu compra?</p>
                  <div className="form-check d-flex align-items-center">
                     <input
                        className="form-check-input me-2 my-1"
                        type="checkbox"
                        value=""
                        checked={bill}
                        onChange={() => setBill(!bill)}
                        id="billCheck"
                     />
                     <label className="form-check-label m-0" for="billCheck">
                        Solicitar factura
                     </label>
                  </div>
                  {bill && (
                     <div className="py-3">
                        <p className="h5 pb-2">
                           ¿Quieres usar los datos de la dirección de envío?
                        </p>
                        <div className="form-check row d-flex">
                           <div className="col-12 col-md-6 d-flex align-items-center">
                              <input
                                 className="form-check-input me-2 my-1"
                                 type="checkbox"
                                 value=""
                                 checked={useAddress}
                                 onChange={() => setUseAddress(!useAddress)}
                                 id="addressCheck"
                              />
                              <label
                                 className="form-check-label m-0"
                                 for="addressCheck"
                              >
                                 Misma dirección de envío
                              </label>
                           </div>
                           <div className="col-12 col-md-6">
                              {useAddress && (
                                 <input
                                    type="text"
                                    class="form-control"
                                    id="rfcInput"
                                    placeholder="RFC"
                                    maxLength={13}
                                    minLength={13}
                                    value={rfc}
                                    onchange={(e) => setRfc(e.target.value)}
                                 />
                              )}
                           </div>
                        </div>
                        <div className="pt-3">
                           <Button primary>Cambiar dirección</Button>
                        </div>
                     </div>
                  )}
               </div>
               <div className="col-12 col-md-4"></div>
            </div>
         </div>
      </div>
   );
}
