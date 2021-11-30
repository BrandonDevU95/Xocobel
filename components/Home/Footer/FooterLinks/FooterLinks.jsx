import Link from 'next/link';
import { Container, Grid, Icon, Image } from 'semantic-ui-react';

export default function FooterLinks() {
   // TOOD: traer de la base de datos
   return (
      <div className="footer-links">
         <Container fluid className="footer-links-container">
            <Grid>
               <Grid.Column width={4}>
                  <Image fluid src="/logo_corona.webp" />
               </Grid.Column>
               <Grid.Column width={4}>
                  <div className="footer-links-container_top-list">
                     <h3>Productos</h3>
                     <ul>
                        <li>
                           <Link
                              href={{
                                 pathname: '/boutique',
                                 query: { type: 'chocolate-semiamargo' },
                              }}
                           >
                              <a>Chocolate Semiamargo</a>
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={{
                                 pathname: '/boutique',
                                 query: { type: 'chocolate-con-leche' },
                              }}
                           >
                              <a>Chocolate con Leche</a>
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={{
                                 pathname: '/boutique',
                                 query: { type: 'chocolate-blanco' },
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
               </Grid.Column>
               <Grid.Column width={4}>
                  <div className="footer-links-container_top-list">
                     <h3>Regalos</h3>
                     <ul>
                        <li>
                           <a href="/pdf/catalogo-navidad.pdf" target="_blank">
                              Navideños
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
                           style={{ marginLeft: '14px' }}
                        />
                        <Icon name="tag" style={{ marginLeft: '14px' }} />
                     </div>
                  </div>
               </Grid.Column>
               <Grid.Column width={4}>
                  <div className="footer-links-container_top-list">
                     <h3>Servicio al Cliente</h3>
                     <ul>
                        <li>
                           <a href="#contact">Contacto</a>
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
               </Grid.Column>
            </Grid>
         </Container>
      </div>
   );
}
