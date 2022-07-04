import { useContext } from 'react';
import PropTypes from 'prop-types';

function Temperature({ temp }) {
  return <div className="temp-container">{temp}</div>;
}

Temperature.propTypes = {
  temp: PropTypes.string.isRequired,
};

export default Temperature;
