import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Header(props) {
  return (
    <div className="header">
    <button onClick={props.handleReset}>Reset</button>
    <button onClick={props.handleUndo}>Undo</button>
    </div>
  );
}

Header.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleUndo: PropTypes.func.isRequired,
};

export default Header;
