import React from 'react';
import PropTypes from 'prop-types';

// Component for Handling Errors
function Error({ message }) {
  return (
    <div className='error'>
      <p>{message}</p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
