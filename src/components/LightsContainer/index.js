import React, { Component } from 'react';
import Light from '../Light';

import './style.scss';

class LightsContainer extends Component {
  render() {
    return (
      <div className="lights-container">
        <Light />
      </div>
    );
  }
}

export default LightsContainer;
