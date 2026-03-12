import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "NGO Heart",
    "url": "https://ngoheart.org",
    "logo": "https://ngoheart.org/logo.png",
    "description": "Empowering communities through sustainable health, education, and development programs worldwide.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/ngoheart",
      "https://twitter.com/ngoheart",
      "https://instagram.com/ngoheart"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
