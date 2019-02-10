import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function LightControls(props) {
  return (
    <div className="header">
    <button onClick={props.handleResetAll}>Reset all</button>
    <button onClick={props.handleReset}>Reset</button>
    </div>
  );
}

LightControls.propTypes = {
  handleResetAll: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default LightControls;
