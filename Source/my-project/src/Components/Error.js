import React from 'react';
import PropTypes from 'prop-types';

// Component for Handling Errors
function Error({ message }) {
  return (
    <div className='error App h-screen'>
      <p className='text-center text-white mt-[50%]'>{message}</p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
