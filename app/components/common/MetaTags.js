// app/components/MetaTags.js

import Head from 'next/head';

const MetaTags = ({
  title,
  description,
  keywords,
  author,
  ogImage,
  url,
  twitterCard,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      <meta
        name="twitter:card"
        content={twitterCard || 'summary_large_image'}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

MetaTags.defaultProps = {
  title: 'Furniture E-Commerce Store',
  description: 'We sell Modern and Classic Furniture',
  keywords: 'furniture, chair, table',
  author: 'PSN',
  ogImage: '/default-image.jpg',
  url: 'https://your-website-url.com',
  twitterCard: 'summary_large_image',
};

export default MetaTags;
