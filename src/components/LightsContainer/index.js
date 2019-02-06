import React, { Component } from 'react';
import Light from '../Light';

import './style.scss';

class LightsContainer extends Component {
  render() {
    return (
      <div className="lights-container">
        {
          [...Array(162)].map((el, index) => {
            return <Light key={index}/>
          })
        }

      </div>
    );
  }
}

export default LightsContainer;
