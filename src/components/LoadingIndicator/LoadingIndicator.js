import React from 'react';
import './LoadingIndicator.scss';

function LoadingIndicator() {
  return (
    <div className="loading-container">
      <div className="d-flex m-1">
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default LoadingIndicator;
