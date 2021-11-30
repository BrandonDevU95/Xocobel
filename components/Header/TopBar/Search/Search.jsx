import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';

export default function Search() {
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
