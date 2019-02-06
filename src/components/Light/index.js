import React, { Component } from 'react';
import './style.scss';
import colorGenerator from '../../utils/colorGenerator'

class Light extends Component {
  constructor(props) {
    super(props);
    this.cg = new colorGenerator();
    this.state = { color: '#e2e2e2' };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    const newColor = this.cg.getRandomColor(this.state.color);
    if (newColor) {
      this.setState({color: newColor});
    }
  }
  render() {
    return (
      <div className="light"
           onClick={this.changeColor}
           onMouseEnter={this.changeColor}
           style={{backgroundColor: this.state.color}}>
      </div>
    );
  }
}

export default Light;
