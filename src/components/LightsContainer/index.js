import React, { Component } from 'react';
import Light from '../Light';

import colorGenerator from '../../utils/colorGenerator'
import config  from '../../config';

import './style.scss';

class LightsContainer extends Component {
  constructor(props) {
    super(props);
    this.cg = new colorGenerator();
    this.state = {
      lights: this._createLightsArray(),
      colorMode: false,
    }
    this.turnOnColorMode = this.turnOnColorMode.bind(this);
    this.turnOffColorMode = this.turnOffColorMode.bind(this);
    this.handleLightEnter = this.handleLightEnter.bind(this);
    this.handleLightClick = this.handleLightClick.bind(this);

  }
  _createLightsArray() {
    return [...Array(config.constants.LIGHT_QUANTITY)].map(() => {
      return {
        color: config.constants.DIMMED_LIGHT_COLOR,
      }
    });
  }

  handleLightEnter(index) {
    if (this.state.colorMode) {
      this.updateColor(index);
    }
  }

  handleLightClick(index) {
    this.updateColor(index);
  }

  updateColor(index) {
    const oc = this.state.lights[index].color;
    const lights = [...this.state.lights];
    lights[index].color = this.cg.getRandomColor(oc);
    this.setState({ lights });
  }

  turnOnColorMode(event) {
    // To prevent DnD
    event.preventDefault && event.preventDefault()
    this.setState({colorMode: true})
  }

  turnOffColorMode() {
    this.setState({colorMode: false})
  }

  render() {
    return (
      <div className="lights-container"
           onMouseDown={this.turnOnColorMode}
           onMouseLeave={this.turnOffColorMode}
           onMouseUp={this.turnOffColorMode}
      >
        {
          this.state.lights.map((el, index) => {
            return (
              <Light key={index}
                     index={index}
                     handleLightEnter={this.handleLightEnter}
                     handleLightClick={this.handleLightClick}
                     color={el.color}
              />
            )
          })
        }

      </div>
    );
  }
}

export default LightsContainer;
