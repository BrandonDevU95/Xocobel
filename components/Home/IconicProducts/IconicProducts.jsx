import { Button, Container, Grid, Image } from 'semantic-ui-react';
import Link from 'next/link';

export default function IconicProducts() {
   return (
      <section className="iconic-products">
         <div className="iconic-products_container container">
            <div className="iconic-products_container_row row">
               <div className="iconic-products_container_row-col col-md-12 col-lg-6">
                  <div className="iconic-products_container_row-col-content">
                     <Image src="/Popular1.webp" fluid alt="Product 1" />
                     <div className="iconic-products_container_row-col-content-description">
                        <p>Chocolate</p>
                        <p>Con leche</p>
                     </div>
                     <div className="iconic-products_container_row-col-content-btnAction-right_1">
                        <Link
                           href={{
                              pathname: '/boutique',
                              query: { type: 'chocolate-con-leche' },
                           }}
                        >
                           <a>
                              <Button type="button" primary>
                                 MÁS
                              </Button>
                           </a>
                        </Link>
                     </div>
                  </div>
                  <div className="iconic-products_container_row-col-content">
                     <Image src="/Popular2.webp" fluid alt="Product 2" />
                     <div className="iconic-products_container_row-col-content-description">
                        <p>Chocolate</p>
                        <p>Blanco</p>
                     </div>
                     <div className="iconic-products_container_row-col-content-btnAction-left">
                        <Link
                           href={{
                              pathname: '/boutique',
                              query: { type: 'chocolate-blanco' },
                           }}
                        >
                           <a>
                              <Button type="button" primary>
                                 MÁS
                              </Button>
                           </a>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="iconic-products_container_row-col col-md-12 col-lg-6">
                  <div className="iconic-products_container_row-col-content">
                     <Image src="/Popular3.webp" fluid alt="Product 3" />
                     <div className="iconic-products_container_row-col-content-description">
                        <p>Chocolate</p>
                        <p>Semiamargo</p>
                     </div>
                     <div className="iconic-products_container_row-col-content-btnAction-right_2">
                        <Link
                           href={{
                              pathname: '/boutique',
                              query: { type: 'chocolate-blanco' },
                           }}
                        >
                           <a>
                              <Button type="button" primary>
                                 DESCUBRE
                              </Button>
                           </a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
