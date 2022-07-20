import React from 'react';

function Location({ loc }) {
  return (
    <div className="location-container">
      <div className="location">
        <p>{loc}</p>
      </div>
    </div>
  );
}

export default Location;
