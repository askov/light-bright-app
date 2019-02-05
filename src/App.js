import React, { Component } from 'react';
import LightsContainer from './components/LightsContainer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="header">
        </header>
        <main>
          <LightsContainer />
        </main>
      </div>
    );
  }
}

export default App;
