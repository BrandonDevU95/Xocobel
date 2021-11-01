import Seo from '../components/Seo.jsx';
import { Button, Container, Grid } from 'semantic-ui-react';
import BasicLayout from '../layouts/Basic/BasicLayout';

export default function Home() {
   return (
      <BasicLayout className="home">
         <Seo title="XOCOBEL | LO MEJOR DEL CHOCOLATE" />
         <Container fluid className="home-container">
            <Container fluid className="home-container__banner">
               <Grid>
                  <Grid.Column width={6}>
                     <h1>Mexican Chocolate</h1>
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
      </BasicLayout>
   );
}
