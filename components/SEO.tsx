import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical, ogImage = 'https://www.fivestarassistants.com/og-image.png' }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Five Star Assistants" />
        <meta name="publisher" content="Five Star Assistants" />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Five Star Assistants" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
    </Helmet>
);

export default SEO;
