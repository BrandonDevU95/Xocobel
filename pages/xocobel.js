import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import Shipping from '../components/Home/Shipping';
import BasicLayout from '../layouts/Basic';

export default function xocobel() {
   return (
      <BasicLayout className="xocobel">
         <Container fluid className="xocobel-container">
            <div className="xocobel-container-banner">
               <div className="xocobel-container-banner-info">
                  <h2>XOCOBEL</h2>
                  <p>
                     From its origins as a pharmacist to its present calling as
                     a <br />
                     chocolatier, Neuhaus has always put caring for others and
                     ensuring <br />
                     their happiness first. That has become the core thread of
                     our DNA. <br />
                     And we extend this consideration for others via our
                     commitment to <br />
                     honest chocolate.
                  </p>
               </div>
            </div>
            <div className="xocobel-container-band">
               <p>OUR COMMITMENT TO HONEST CHOCOLATE</p>
            </div>
            <div className="xocobel-container-grid-1">
               <Grid>
                  <Grid.Column width={8}>
                     <Image src="/xocobel-1.jpeg" alt="Xocobel 1" fluid />
                  </Grid.Column>
                  <Grid.Column
                     width={8}
                     className="xocobel-container-grid-1_column"
                  >
                     <div className="xocobel-container-grid-1_column-description">
                        <h3>SUSTAINABLY SOURCED CACAO</h3>
                        <p>
                           UTZ (now part of the Rainforest Alliance) is the
                           world's leading programme for sustainably grown
                           cacao. The UTZ label stands for more sustainable
                           farming and better opportunities for farmers, their
                           families, and our planet. The UTZ certification
                           program enables farmers to use better farming
                           methods, grow better crops, and generate more income.
                           They learn how to improve working conditions, adapt
                           to climate change, and protect the environment.
                        </p>
                     </div>
                  </Grid.Column>
               </Grid>
            </div>
            <div className="xocobel-container-grid-2">
               <Grid>
                  <Grid.Column
                     width={8}
                     className="xocobel-container-grid-2_column"
                  >
                     <div className="xocobel-container-grid-2_column-description">
                        <h3>WE INVEST IN OUR OWN CACAO FARM</h3>
                        <p>
                           Our own plantation is located in in the Guayaquil
                           region of Ecuador in South America. This location
                           offers the ideal conditions for growing cacao trees.
                           The combination of the favourable climate, the
                           perfect soil and the expertise of our local farmers
                           guarantees the superior quality of our chocolate. The
                           cacao farmers are true masters of the fermentation
                           process, which releases the characteristic aromas of
                           the cacao beans to perfection so that we can enjoy
                           chocolate with a unique, distinctive and rich
                           flavour.
                        </p>
                     </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                     <Image src="/xocobel-2.jpeg" alt="Xocobel 2" fluid />
                  </Grid.Column>
               </Grid>
            </div>
            <div className="xocobel-container-grid-1">
               <Grid>
                  <Grid.Column width={8}>
                     <Image src="/xocobel-3.jpeg" alt="Xocobel 3" fluid />
                  </Grid.Column>
                  <Grid.Column
                     width={8}
                     className="xocobel-container-grid-1_column"
                  >
                     <div className="xocobel-container-grid-1_column-description">
                        <h3>FROM BEAN TO PRALINE</h3>
                        <p>
                           The beans of the cacao tree have a naturally bitter
                           taste and must first pass through several stages in
                           order to develop the perfect flavour.
                        </p>
                     </div>
                  </Grid.Column>
               </Grid>
            </div>
            <div className="xocobel-container-grid-2">
               <Grid>
                  <Grid.Column
                     width={8}
                     className="xocobel-container-grid-2_column"
                  >
                     <div className="xocobel-container-grid-2_column-description">
                        <h3>NATURAL INGREDIENTS</h3>
                        <p>
                           Our buyers carefully select all the ingredients,
                           flavourings and colourings that go into a Neuhaus
                           praline. They choose the best farmers and craftsmen
                           from around the world to ensure that every Neuhaus
                           product is, without exception, 100% natural and
                           guarantees a symphony of flavours and textures.
                        </p>
                     </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                     <Image src="/xocobel-4.jpeg" alt="Xocobel 4" fluid />
                  </Grid.Column>
               </Grid>
            </div>
            <div className="xocobel-container-band-foot">
               <div className="xocobel-container-band-foot-data">
                  <h3>OUR COMMITMENT FOR THE FUTURE</h3>
                  <p>
                     When selecting our ingredients and packaging, we always
                     make conscious choices. <br />
                     We strive to use these choices to contribute to a
                     sustainable future. <br /> This objective is of great
                     importance to us and it is an ongoing process, which never
                     ends.
                  </p>
               </div>
            </div>
            <Shipping />
         </Container>
      </BasicLayout>
   );
}
