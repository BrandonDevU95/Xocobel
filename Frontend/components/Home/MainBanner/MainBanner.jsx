import { Button, Container, Grid } from 'semantic-ui-react';

export default function MainBanner() {
   return (
      <Container fluid className="main-banner-container">
         <Container fluid className="main-banner-container__banner">
            <Grid>
               <Grid.Column width={6}>
                  <h1>Mexican Chocolate</h1>
                  <p>
                     Lorem esse consequat amet ullamco sint ullamco consequat in
                     amet dolor consectetur sit duis ex. Id incididunt mollit
                     amet sint elit ex do consequat quis laboris ea. Culpa irure
                     qui aliqua irure mollit amet excepteur adipisicing culpa
                     pariatur ipsum laborum. Magna sint duis id qui Lorem elit
                     ad laboris enim id. Aliquip nisi aliquip nisi fugiat aute
                     est laborum irure proident fugiat.
                  </p>
                  <div className="actions">
                     <Button type="button" primary>
                        More
                     </Button>
                     <Button type="button" basic>
                        Shop Now
                     </Button>
                  </div>
               </Grid.Column>
            </Grid>
         </Container>
      </Container>
   );
}
