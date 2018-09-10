import React, { Component } from 'react';
//import the PeopleList comopnent
import PeopleList from './PeopleList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PeopleList />
      </div>
    );
  }
}

export default App;
