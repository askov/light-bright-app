import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function LightControls(props) {
  return (
    <div className="light-controls">
      <button onClick={props.handleResetAll}
              className="control-button"
              data-testid="reset-all"
      >
        Reset all
      </button>
      <button onClick={props.handleReset}
              className="control-button"
              data-testid="reset"
      >
        Reset
      </button>
    </div>
  );
}

LightControls.propTypes = {
  handleResetAll: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default LightControls;
