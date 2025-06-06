'use client';

import { useEffect } from 'react';

const Client = () => {
  const data = null;
  useEffect(() => {
    const { property_not_available } = data;
    console.log(property_not_available);
  });

  return (
    <div>
      <h1>Client error example</h1>
      <p>This page will throw an error on the client side.</p>
    </div>
  );
};

export default Client;
