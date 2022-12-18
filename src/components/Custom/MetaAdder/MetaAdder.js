import React from 'react';
import { Helmet } from 'react-helmet';
const MetaAdder = ({ title, description }) => {
   return (
      <Helmet>
         <meta property='og:title' content={title} />
         <meta name='description' content={description} />
      </Helmet>
   );
};

export default MetaAdder;
