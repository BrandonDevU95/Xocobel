import { Container, Grid, Image } from 'semantic-ui-react';

export default function Ingredients() {
   return (
      <Container fluid className="ingredients">
         <Container fluid className="ingredients-container">
            <Grid columns={3}>
               <Grid.Column>
                  <div className="ingredients-container_column">
                     <h2>Natural Ingredients</h2>
                     <Image src="/icons/cocoa.svg" />
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus quam dolores placeat repellendus eaque
                        necessitatibus assumenda.
                     </p>
                  </div>
               </Grid.Column>
               <Grid.Column>
                  <div className="ingredients-container_column">
                     <h2>Gourmet</h2>

                     <Image src="/icons/chef.svg" />
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit laborum odio itaque eum? Lorem ipsum dolor sit amet.
                     </p>
                  </div>
               </Grid.Column>
               <Grid.Column>
                  <div className="ingredients-container_column">
                     <h2>Made In Mexico</h2>

                     <img src="/icons/pyramid-of-the-magician.svg" />
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repudiandae eum ducimus natus dolorem enim rem
                        debitis repellat neque!
                     </p>
                  </div>
               </Grid.Column>
            </Grid>
         </Container>
      </Container>
   );
}
