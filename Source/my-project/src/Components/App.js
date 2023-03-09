import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import Info from '../Info';
import Image from './Image';
import LoadingSpinner from './LoadingSpinner';
import Error from './Error';
import { getCollections } from '../API/API';
import '../styles/App.css';

function App() {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timeout;

    const loadCollections = async () => {
      try {
        // Edit API in ../API/API.js
        const collections = await getCollections();
        setCollections(collections);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    // Loader Timeout set to 30 Seconds
    const loadTimeout = setTimeout(() => {
      if (collections.length === 0) {
        setError('Failed to load. Please chech your internet connection.');
        setIsLoading(false);
      }
    }, 30000);

    loadCollections();

    return () => {
      clearTimeout(timeout);
      // Cleaning Up
      clearTimeout(loadTimeout);
    };
  }, [collections]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error message={error} />;
  }

  // Log API to Console
  // {console.log(collections)}

  return (
    <div className='App'>
      <Header />
      <div className='w-full scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex snap-mandatory snap-x overflow-x-scroll overflow-y-hidden scroll-smooth space-x-6'>
        {collections.map((collection, index) => (
          <Image
            key={index}
            name={collection.name}
            url={collection.imageUrl}
            description={collection.description}
            address={collection.ownerAddress}
            slug={collection.slug}
          />
        ))}
      </div>
      <Info />
      <Footer />
    </div>
  );
}

// Cleaning Up
Image.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default App;