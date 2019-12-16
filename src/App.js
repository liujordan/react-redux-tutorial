import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import store from './js/store/index';
import PlayerList from './components/PlayerList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <div className="content">
           <PlayerList />
         </div>
        </Provider>
      </div>
    );
  }
}

export default App;