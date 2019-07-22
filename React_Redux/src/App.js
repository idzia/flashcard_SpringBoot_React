import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route
        } from 'react-router-dom';
import Home from './components/Home';
import Learn from './components/Learn';
import FlashcardsTable from './components/FlashcardsTable';
import './css/App.css'

const App = ({store}) => (
  <Provider store={store}>
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/flashcards/:id" component={FlashcardsTable} />
          <Route exact path="/learn/:id" component={Learn} />
      </Router>
  </Provider>
)

export default App;

