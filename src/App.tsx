import * as React from 'react';
import './App.css';
import { MaterialUiButton } from './material-ui/material-ui-button';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <h1>TypeScript with Material UI</h1>
        <MaterialUiButton/>
      </div>
    );
  }
}

export default App;
