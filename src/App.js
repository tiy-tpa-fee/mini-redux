import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Counter'

import './App.css'

// For every action, this function will recieve the current state
// and the action, and should return what the next state should be.
function counter(oldState = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: oldState.count + 1 }
    case 'DECREMENT':
      return { count: oldState.count - 1 }
    default:
      return oldState
  }
}

let store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img
              src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67"
              className="App-logo"
              alt="logo"
            />
            <h2>Welcome to Redux</h2>
          </div>
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default App
