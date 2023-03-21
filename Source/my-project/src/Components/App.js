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
      <Info />
      <div className='w-full scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex snap-mandatory snap-x overflow-x-scroll overflow-y-hidden scroll-smooth space-x-6'>
          <Image
            key={0}
            name={"Tawakkul"}
            url={"https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"}
            description={""}
            address={""}
            slug={""}
          />

          <Image
            key={0}
            name={"Tawakkul"}
            url={"https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"}
            description={""}
            address={""}
            slug={""}
          />

          <Image
            key={0}
            name={"Tawakkul"}
            url={"https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"}
            description={""}
            address={""}
            slug={""}
          />
      
          
          <Image
            key={0}
            name={"Tawakkul"}
            url={"https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"}
            description={""}
            address={""}
            slug={""}
          />

          
          <Image
            key={0}
            name={"Tawakkul"}
            url={"https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"}
            description={""}
            address={""}
            slug={""}
          />

          
          <Image
            key={0}
            name={"Tawakkul"}
            url={"https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"}
            description={""}
            address={""}
            slug={""}
          />

          
          <Image
            key={0}
            name={"Tawakkul"}
            url={"https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"}
            description={""}
            address={""}
            slug={""}
          />
      </div>
      
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