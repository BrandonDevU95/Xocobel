import { Container, Grid, Image } from 'semantic-ui-react';

export default function MainBanner() {
   return (
      <section className="main-banner-corporate-container">
         <Container fluid className="main-banner-corporate-container__banner">
            <Grid>
               <Grid.Column width={7}>
                  <div className="main-banner-corporate-container__banner_left">
                     <h1>Regalos de empresa</h1>
                     <p>
                        Lorem esse consequat amet ullamco sint ullamco consequat
                        in amet dolor consectetur sit duis ex. Id incididunt
                        mollit amet sint elit ex do consequat quis laboris ea.
                        Culpa irure qui aliqua irure mollit amet excepteur
                        adipisicing culpa pariatur ipsum laborum. Magna sint
                        duis id qui Lorem elit ad laboris enim id. Aliquip nisi
                        aliquip nisi fugiat aute est laborum irure proident
                        fugiat.
                     </p>
                  </div>
               </Grid.Column>
               <Grid.Column width={9}></Grid.Column>
            </Grid>
         </Container>
      </section>
   );
}
