import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Container, Grid, Image, Input } from 'semantic-ui-react';

export default function TopBar() {
   return (
      <div className="top-bar">
         <Container fluid className="top-bar-container">
            <Grid className="top-bar">
               <Grid.Column width={8} className="top-bar__left">
                  <Logo />
               </Grid.Column>
               <Grid.Column width={8} className="top-bar__right">
                  <Search />
               </Grid.Column>
            </Grid>
         </Container>
      </div>
   );
}

function Logo() {
   return (
      <Link href="/">
         <a>
            <Image src="/logo.png" alt="Xocobel" />
         </a>
      </Link>
   );
}

function Search() {
   const router = useRouter();
   const [load, setLoad] = useState(false);
   const [searchStr, setSearchStr] = useState('');

   useEffect(() => {
      if (load) {
         router.push(`/search?query=${searchStr}`);
      }
      setLoad(true);
   }, [searchStr]);

   return (
      <Input
         id="xoco-search"
         icon={{ name: 'search' }}
         value={router.query.query}
         onChange={(_, data) => setSearchStr(data.value)}
      />
   );
}
