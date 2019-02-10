import React, { Component } from 'react';
import LightsContainer from './components/LightsContainer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <main>
          <LightsContainer />
        </main>
      </div>
    );
  }
}

export default App;
