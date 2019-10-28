import React from 'react';
import Header from './Components/Header';
import './App.css';
import Main from './Components/Main';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;
