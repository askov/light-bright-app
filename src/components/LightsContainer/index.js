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
      recent: [],
      colorMode: false,
    }
    this.turnOnColorMode = this.turnOnColorMode.bind(this);
    this.turnOffColorMode = this.turnOffColorMode.bind(this);
    this.handleLightEnter = this.handleLightEnter.bind(this);
    this.handleLightClick = this.handleLightClick.bind(this);
    this.resetAllLights = this.resetAllLights.bind(this);
    this.resetLight = this.resetLight.bind(this);
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
    // this.setState({ lights });
    this.setState((state) => {
      const oc = state.lights[index].color;
      const lights = [...state.lights];
      lights[index].color = this.cg.getRandomColor(oc);
      const recent = [...state.recent];
      recent.push(index);
      console.log('push ', index)
      return {
        lights,
        recent,
      }
    });
  }

  turnOnColorMode(event) {
    // To prevent DnD
    event.preventDefault && event.preventDefault()
    this.setState({colorMode: true})
  }

  turnOffColorMode() {
    this.setState({colorMode: false})
  }

  resetAllLights() {
    const lights = this._createLightsArray();
    this.setState({ lights });
  }

  resetLight(index) {
    const lights = [...this.state.lights];
    lights[index].color = config.constants.DIMMED_LIGHT_COLOR;
    this.setState({ lights })
  }

  render() {
    return (
      <>
        <LightControls
          handleResetAll={this.resetAllLights}
          handleReset={() => 1}
        />
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
                      handleDoubleClick={this.resetLight}
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
