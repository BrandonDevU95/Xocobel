import React from 'react';
import Head from 'next/head';

export default function Seo({ title, description }) {
   return (
      <Head>
         <title>{title}</title>
         <meta property="description" content={description} />
      </Head>
   );
}

Seo.defaultProps = {
   title: 'Xocobel',
   description:
      'Somos una empresa con más de 30 años de experiencia en el mercado. Nos dedicamos a la producción de chocolatería y bombonería artesanal elaborada por expertos chocolateros mexicanos.',
};
