import React from "react";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ metaTitle, metaDesc, canonicalLink }) => {
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalLink}></link>
      {process.env.REACT_APP_APP_MODE === "production" ? (
        <meta name="robots" content="index, follow" />
      ) : (
        <meta name="robots" content="noindex" />
      )}
    </Helmet>
  );
};

export default MetaDecorator;
