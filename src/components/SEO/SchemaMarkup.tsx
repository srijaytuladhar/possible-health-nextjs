import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Possible Health",
    "url": "https://possiblehealth.org",
    "logo": "https://possiblehealth.org/logo.png",
    "description": "Empowering communities through sustainable health, education, and development programs worldwide.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/possiblehealth",
      "https://twitter.com/possiblehealth",
      "https://instagram.com/possiblehealth"
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
