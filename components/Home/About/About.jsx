import React from 'react';
import { Button, Container, Grid, Image } from 'semantic-ui-react';

export default function About() {
   return (
      <Container fluid className="about">
         <Container fluid className="about-container">
            <Grid>
               <Grid.Column width={8} className="about-container-description">
                  <h2>Todo el sabor europeo desde 1987</h2>
                  <p>
                     Occaecat velit enim veniam exercitation. Laboris nostrud
                     duis sit mollit sint consectetur ipsum duis officia do do
                     do ea proident. Ipsum anim id fugiat aliqua adipisicing
                     duis. Nisi irure incididunt laboris est duis. Consectetur
                     occaecat officia adipisicing et minim occaecat ut mollit
                     esse. Exercitation dolor magna commodo occaecat pariatur
                     commodo commodo reprehenderit adipisicing. Consectetur
                     nulla eu et reprehenderit culpa dolor veniam elit
                     consectetur aliquip culpa fugiat consectetur. Veniam
                     consequat sint qui ea nulla ex amet dolore sunt ullamco
                     velit sunt voluptate. Tempor aute est non eu minim esse ad
                     qui ad.
                  </p>
                  <Button basic>DISCOVER MORE</Button>
               </Grid.Column>
               <Grid.Column width={8}>
                  <Image src="/chocolate-about.jpg" fluid />
               </Grid.Column>
            </Grid>
         </Container>
      </Container>
   );
}
