import { useEffect } from 'react';

const SEO = ({
  title = 'Softsincs - Leading Software Development Company',
  description = 'Softsincs is a premier software development company specializing in custom web applications, mobile apps, AI solutions, and enterprise software. Transform your business with cutting-edge technology.',
  keywords = 'software development, web development, mobile app development, AI solutions, custom software, enterprise solutions, cloud services, digital transformation, technology consulting, software company',
  author = 'Softsincs',
  image = 'https://softsincs.com/Images/softsinc-logo.png',
  url = 'https://softsincs.com',
  type = 'website',
  twitterHandle = '@softsincs',
  publishedTime,
  modifiedTime,
  schema
}) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (attr, attrValue, content) => {
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', author);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'googlebot', 'index, follow');

    // Open Graph tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:image:alt', title);
    setMetaTag('property', 'og:site_name', 'Softsincs');
    setMetaTag('property', 'og:locale', 'en_US');

    if (publishedTime) setMetaTag('property', 'article:published_time', publishedTime);
    if (modifiedTime) setMetaTag('property', 'article:modified_time', modifiedTime);

    // Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', twitterHandle);
    setMetaTag('name', 'twitter:creator', twitterHandle);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // Additional meta tags
    setMetaTag('name', 'theme-color', '#7c3aed');
    setMetaTag('name', 'msapplication-TileColor', '#7c3aed');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Structured data
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Softsincs',
      url: 'https://softsincs.com',
      logo: 'https://softsincs.com/Images/softsinc-logo.png',
      description: 'Leading software development company providing innovative technology solutions',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK'
      },
      sameAs: [
        'https://www.linkedin.com/company/softsincs',
        'https://twitter.com/softsincs',
        'https://www.facebook.com/softsincs'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'info@softsincs.com'
      }
    };

    const schemaData = schema || defaultSchema;
    
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, author, image, url, type, twitterHandle, publishedTime, modifiedTime, schema]);

  return null;
};

export default SEO;
