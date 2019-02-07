import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Light(props) {
  return (
    <div className="light"
          onMouseEnter={() => props.handleLightEnter(props.index)}
          onMouseDown={() => props.handleLightClick(props.index)}
          style={{backgroundColor: props.color}}>
    </div>
  );
}

Light.propTypes = {
  color: PropTypes.string.isRequired,
  handleLightEnter: PropTypes.func.isRequired,
  handleLightClick: PropTypes.func.isRequired,
};

export default Light;
