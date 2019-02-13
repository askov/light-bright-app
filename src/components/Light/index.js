import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Light(props) {
  return (
    <div className="light"
         onMouseEnter={() => props.handleLightEnter(props.index)}
         onMouseDown={() => props.handleLightClick(props.index)}
         onDoubleClick={() => props.handleDoubleClick(props.index)}
         style={{backgroundColor: props.color}}>
    </div>
  );
}

Light.propTypes = {
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handleLightEnter: PropTypes.func.isRequired,
  handleLightClick: PropTypes.func.isRequired,
  handleDoubleClick: PropTypes.func.isRequired,
};

export default Light;
