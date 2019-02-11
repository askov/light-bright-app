import React, { Component } from 'react';
import Light from '../Light';

import colorGenerator from '../../utils/colorGenerator'
import config  from '../../config';
import LightControls from '../LightControls';

import './style.scss';

class LightsContainer extends Component {
  constructor(props) {
    super(props);
    this.cg = new colorGenerator();
    this.state = {
      lights: this._createLightsArray(),
      buffer: [],
      streak: [],
      colorMode: false,
    }
    this.turnOnColorMode = this.turnOnColorMode.bind(this);
    this.turnOffColorMode = this.turnOffColorMode.bind(this);
    this.handleLightEnter = this.handleLightEnter.bind(this);
    this.handleLightClick = this.handleLightClick.bind(this);
    this.resetAllLights = this.resetAllLights.bind(this);
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
    this.setState((state) => {
      const oc = state.lights[index].color;
      const lights = [...state.lights];
      lights[index].color = this.cg.getRandomColor(oc);
      return {
        lights,
      }
    });
    this.updateBuffer(index);
  }

  updateBuffer(index) {
    this.setState((state) => {
      const buffer = [...state.buffer];
      if (state.buffer.indexOf(index) === -1) {
        buffer.push(index);
      }
      return {
        buffer,
      }
    });
  }


  turnOnColorMode(event) {
    // To prevent DnD
    event.preventDefault && event.preventDefault()
    this.setState({colorMode: true})
  }

  turnOffColorMode() {
    this.setState((state) => {
      const newState = {
        colorMode: false,
        buffer: [],
      };
      if (state.buffer.length) {
        newState.streak = [...state.buffer];
      }
      return newState;
    });
  }

  resetAllLights() {
    const lights = this._createLightsArray();
    this.setState({ lights });
  }

  dimLights(index) {
    this.setState((state) => {
      const lights = [...state.lights];
      (index ? [index] : state.streak).forEach((index) => {
        lights[index].color = config.constants.DIMMED_LIGHT_COLOR;
      });
      return {
        lights,
      }
    });
  }


  render() {
    return (
      <>
      <header>
        Light-Bright App
        <LightControls
          handleResetAll={this.resetAllLights}
          handleReset={() => this.dimLights()}
        />
      </header>

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
                       handleDoubleClick={(index) => this.dimLights(index)}
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
