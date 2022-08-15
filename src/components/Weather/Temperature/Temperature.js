import { useContext } from 'react';
import PropTypes from 'prop-types';

function Temperature({ temp }) {
  return (
    <div className="temp-container">
      <div className="temp">
        <div className="temperature">{temp}</div>
      </div>
    </div>
  );
}

Temperature.propTypes = {
  temp: PropTypes.string.isRequired,
};

Temperature.defaultProps = {
  temp: '90',
};

export default Temperature;
