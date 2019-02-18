import React, { Component } from 'react';
import Light from '../Light';

import ColorGenerator from '../../utils/colorGenerator'
import StreakBuffer from '../../utils/streakBuffer'
import config  from '../../config';
import LightControls from '../LightControls';

import './style.scss';

class LightsContainer extends Component {
  constructor(props) {
    super(props);
    // Colors logic
    this.cg = new ColorGenerator();
    // Buffer to save last streak
    this.sb = new StreakBuffer();
    // Turn off/on coloring mode
    this.colorMode = false;
    this.state = {
      lights: this._createLightsArray(),
    }
  }

  // Create initial light array
  _createLightsArray() {
    return [...Array(config.constants.LIGHT_QUANTITY)].map(() => {
      return {
        color: config.constants.DIMMED_LIGHT_COLOR,
      }
    });
  }

  // Coloring mode
  turnOnColorMode = (event) => {
    // To prevent DnD
    event.preventDefault && event.preventDefault()
    this.colorMode = true;
  }

  turnOffColorMode = () => {
    this.colorMode = false;
    this.sb.flush();
  }

  // Light event handlers
  handleLightEnter = (index) => {
    if (this.colorMode) {
      this._updateColor(index);
    }
  }

  handleLightClick = (index) => {
    this._updateColor(index);
  }

  handleDoubleClick = (index) => {
    this.dimLights(index);
  }

  _updateColor(index) {
    this.setState((state) => {
      const oc = state.lights[index].color;
      const lights = [...state.lights];
      lights[index].color = this.cg.getRandomColor(oc);
      return {
        lights,
      }
    });
    this.sb.push(index);
  }

  // Light controls
  dimAllLights = () => {
    const lights = this._createLightsArray();
    this.setState({ lights });
  }

  dimLights = (index) => {
    const streak = this.sb.getStreak();
    this.setState((state) => {
      const lights = [...state.lights];
      (Number.isInteger(index) ? [index] : streak).forEach((el) => {
        lights[el].color = config.constants.DIMMED_LIGHT_COLOR;
      });
      return {
        lights,
      }
    });
  }

  render() {
    return (
      <>
      <div id="#test">
        Light-Bright App
        <LightControls
          handleResetAll={this.dimAllLights}
          handleReset={this.dimLights}
        />
      </div>
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
                       handleDoubleClick={this.handleDoubleClick}
                       color={el.color}
                />
              )
            })
          }
        </div>
      </>

    );
  }
}

export default LightsContainer;
