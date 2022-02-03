import Link from "next/link";
import { CATALOGO } from "../../../../utils/constants";
import { Container, Grid, Icon, Image } from "semantic-ui-react";

export default function FooterLinks() {
   // TOOD: traer de la base de datos
   return (
      <div className="footer-links">
         <div className="footer-links-container container">
            <div className="footer-links-container_row row">
               <div className="col-12 col-sm-12 col-md-12 col-lg-3 footer-links-container_row-col">
                  <Image
                     fluid
                     src="/logo_corona.png"
                     className="d-sm-none d-lg-block"
                  />
               </div>
               <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer-links-container_row-col desc">
                  <div className="footer-links-container_top-list">
                     <h3>Productos</h3>
                     <ul>
                        <li>
                           <Link
                              href={{
                                 pathname: "/boutique",
                                 query: { type: "chocolate-semiamargo" },
                              }}
                           >
                              <a>Chocolate Semiamargo</a>
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={{
                                 pathname: "/boutique",
                                 query: { type: "chocolate-con-leche" },
                              }}
                           >
                              <a>Chocolate con Leche</a>
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={{
                                 pathname: "/boutique",
                                 query: { type: "chocolate-blanco" },
                              }}
                           >
                              <a>Chocolate Blanco</a>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="footer-links-container_bottom-list">
                     <h3>Métodos de Pago</h3>
                     <div className="list-icons">
                        <Icon name="cc visa" />
                        <Icon name="cc mastercard" />
                        <Icon name="cc amex" />
                     </div>
                  </div>
               </div>
               <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer-links-container_row-col desc">
                  <div className="footer-links-container_top-list">
                     <h3>Regalos</h3>
                     <ul>
                        <li>
                           <a href={CATALOGO} target="_blank">
                              San Valentín
                           </a>
                        </li>
                        <li>
                           <Link href="/corporate">
                              <a>Corporativos</a>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="footer-links-container_bottom-list">
                     <h3>Envíos</h3>
                     <div className="list-icons">
                        <Icon name="truck" />
                        <Icon
                           name="shopping cart"
                           style={{ marginLeft: "14px" }}
                        />
                        <Icon name="tag" style={{ marginLeft: "14px" }} />
                     </div>
                  </div>
               </div>
               <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer-links-container_row-col desc">
                  <div className="footer-links-container_top-list">
                     <h3>Servicio al Cliente</h3>
                     <ul>
                        <li>
                           <a href="/#contact">Contacto</a>
                        </li>
                     </ul>
                  </div>
                  <div className="footer-links-container_bottom-list">
                     <h3>Redes Sociales</h3>
                     <div className="list-icons">
                        <a
                           href="https://www.facebook.com/Xocobel-107604454840465"
                           target="_blank"
                        >
                           <Icon name="facebook" />
                        </a>
                        <a
                           href="https://www.instagram.com/xocobelmx/?hl=es-la"
                           target="_blank"
                        >
                           <Icon name="instagram" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
