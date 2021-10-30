import { useState, useEffect } from 'react';
import BasicLayout from '../layouts/Basic';

export default function search() {
   useEffect(() => {
      document.getElementById('xoco-search').focus();
   }, []);

   return (
      <BasicLayout className="search">
         <h1>Search</h1>
      </BasicLayout>
   );
}
