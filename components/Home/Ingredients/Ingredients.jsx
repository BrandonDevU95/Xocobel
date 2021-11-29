import { Container, Grid, Image } from 'semantic-ui-react';

export default function Ingredients() {
   return (
      <section className="ingredients">
         <Container fluid className="ingredients-container">
            <Grid columns={3}>
               <Grid.Column>
                  <div className="ingredients-container_column">
                     <h2>Ingredientes Naturales</h2>
                     <Image src="/icons/cocoa.svg" />
                     <p>
                        Chocolate certificado SICAO <br /> por Barry Callebaut
                     </p>
                  </div>
               </Grid.Column>
               <Grid.Column>
                  <div className="ingredients-container_column">
                     <h2>Gourmet</h2>

                     <Image src="/icons/chef.svg" />
                     <p>
                        Chocolatería y bombonera <br /> artesanal
                     </p>
                  </div>
               </Grid.Column>
               <Grid.Column>
                  <div className="ingredients-container_column">
                     <h2>Hecho En México</h2>

                     <img src="/icons/pyramid-of-the-magician.svg" />
                     <p>
                        Elaborada por expertos <br /> chocolateros mexicanos
                     </p>
                  </div>
               </Grid.Column>
            </Grid>
         </Container>
      </section>
   );
}
