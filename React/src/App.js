import React, { Component } from 'react';
import { BrowserRouter as Router, Route
        } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';
import Flashcards from './Flashcards';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="bigContainer">
            <Route exact path="/" component={Home} />
            <Route exact path="/flashcards/:id" component={Flashcards} />
            <Route exact path="/learn/:id" component={Learn} />
        </div>
      </Router>
    );
  }
}

export default App;
