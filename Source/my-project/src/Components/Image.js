import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Image({ name, url, description, address, slug}) {
  const [showModal, setShowModal] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const truncatedDescription = description.substring(0, 30);
  const remainingDescription = description.substring(30);

  return (
    <div>
      <div
        className="mx-8 h-80 mt-6 bg-gradient-to-br from-purple-500 to-blue-500 px-4 py-6 snap-center cursor-pointer"
        onClick={handleOpenModal}
      >
        <p className="w-full h-0 text-7xl gradient-text">view our best nfts</p>
        <img src={url} alt={name} className="mx-auto object-contain max-h-full mt-4" />
        <h1 className="text-xl text-white pt-4 text-center">{name}</h1>
      </div>


      
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-#000 rounded-lg shadow-lg w-64">
            <div className="bg-gray-800 text-center rounded-t-lg p-4">
              <h2 className="text-white text-2xl font-bold">{name}</h2>
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={handleCloseModal}>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <img src={url} onClick={handleCloseModal} alt={name} className="mx-auto object-contain max-h-full mt-4" />
              <p className="text-xs md:text-lg font-medium text-white mt-4">
                {showFullDescription ? description : truncatedDescription}
                {!showFullDescription && (
                  <button
                    className="text-blue-500 hover:underline ml-1"
                    onClick={() => setShowFullDescription(true)}
                  >
                    show more
                  </button>
                )}
              </p>
              <p className="text-xs md:text-lg text-white font-medium mt-4">{`Owner Address: ${address}`}</p>
              <button
                className="bg-green-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-green-600"
                onClick={() => window.open(`https://opensea.io/assets?search[query]=${slug}`, '_blank')}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



// Cleaning Up
Image.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Image;
