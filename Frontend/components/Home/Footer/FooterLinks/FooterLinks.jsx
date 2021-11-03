import React from 'react';
import { Container, Grid, Icon, Image } from 'semantic-ui-react';

export default function FooterLinks() {
   return (
      <div className="footer-links">
         <Container fluid className="footer-links-container">
            <Grid>
               <Grid.Column width={4}>
                  <Image fluid src="/logo_corona.png" />
               </Grid.Column>
               <Grid.Column width={4}>
                  <div className="footer-links-container_top-list">
                     <h3>Products</h3>
                     <ul>
                        <li>Full Asortment</li>
                        <li>Ballotins</li>
                        <li>Bars & Tablets</li>
                        <li>Carres</li>
                        <li>Gifts Boxes</li>
                        <li>Hosting Box</li>
                     </ul>
                  </div>
                  <div className="footer-links-container_bottom-list">
                     <h3>Payment Methods</h3>
                     <div className="list-icons">
                        <Icon name="cc paypal" />
                        <Icon
                           name="cc mastercard"
                           style={{ marginLeft: '14px' }}
                        />
                        <Icon name="cc visa" style={{ marginLeft: '14px' }} />
                     </div>
                  </div>
               </Grid.Column>
               <Grid.Column width={4}>
                  <div className="footer-links-container_top-list">
                     <h3>Gifts Occasions</h3>
                     <ul>
                        <li>Birthday Gifts</li>
                        <li>Congratulations</li>
                        <li>Dinner Party</li>
                        <li>Gifts for Her</li>
                        <li>Gifts for Him</li>
                        <li>Thank You GIfts</li>
                     </ul>
                  </div>
                  <div className="footer-links-container_bottom-list">
                     <h3>Shipping Methods</h3>
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
                     <h3>Customer Service</h3>
                     <ul>
                        <li>FAQ'S</li>
                        <li>Shipping & Delivery</li>
                        <li>Contact Us</li>
                     </ul>
                  </div>
                  <div className="footer-links-container_bottom-list">
                     <h3>Social Media</h3>
                     <div className="list-icons">
                        <Icon name="instagram" />
                        <Icon name="facebook" style={{ marginLeft: '14px' }} />
                        <Icon name="youtube" style={{ marginLeft: '14px' }} />
                     </div>
                  </div>
               </Grid.Column>
            </Grid>
         </Container>
      </div>
   );
}
