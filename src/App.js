import React, { Component } from 'react';
import LightsContainer from './components/LightsContainer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="header">
          <Header
            handleReset={() => 1}
            handleUndo={() => 1}
          />
        </header>
        <main>
          <LightsContainer />
        </main>
      </div>
    );
  }
}

export default App;
