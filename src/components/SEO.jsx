import React from 'react';
import { Helmet } from 'react-helmet';
import siteMetadata from '../config/meta';

const SEO = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  keywords = siteMetadata.keywords.join(', '),
  author = siteMetadata.author,
  url = typeof window !== 'undefined' ? window.location.href : siteMetadata.siteUrl,
  image = siteMetadata.defaultImage,
  type = 'website',
  locale = siteMetadata.locale,
}) => {
  const metaDescription = description || siteMetadata.description;
  const metaTitle = title || siteMetadata.title;
  const metaUrl = url || siteMetadata.siteUrl;
  const metaImage = image.startsWith('http') ? image : `${siteMetadata.siteUrl}${image}`;
  return (
    <Helmet
      htmlAttributes={{
        lang: locale.split('_')[0],
      }}
    >
      {/* Balises meta standards */}
      <title>{`${metaTitle} | ${siteMetadata.author}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Balises Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteMetadata.title} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {siteMetadata.twitterUsername && (
        <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      )}
      
      {/* Balises supplémentaires */}
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={metaUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      
      {/* Préchargement des polices et ressources critiques */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Balises pour les réseaux sociaux */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Balise pour les appareils mobiles */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Balise pour le mode sombre/clair */}
      <meta name="color-scheme" content="light dark" />
    </Helmet>
  );
};

export default SEO;
