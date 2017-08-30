import React, { Component } from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'

class Counter extends Component {
  static propTypes = {
    count: T.number,
    click: T.func.isRequired
  }

  render() {
    return (
      <div className="Counter">
        <p className="App-intro">
          You have clicked the button {this.props.counter} times.
        </p>
        <p>
          <button onClick={this.props.click}>Click Me!</button>
        </p>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      counter: state.count
    }
  },
  dispatch => {
    return {
      click: () => dispatch({ type: 'INCREMENT' })
    }
  }
)(Counter)
