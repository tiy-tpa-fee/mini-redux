import React, { Component } from 'react'
import T from 'prop-types'

class Counter extends Component {
  static propTypes = {
    count: T.number.isRequired,
    click: T.func.isRequired
  }

  render() {
    return (
      <div className="Counter">
        <p className="App-intro">
          You have clicked the button {this.props.count} times.
        </p>
        <p>
          <button onClick={this.props.click}>Click Me!</button>
        </p>
      </div>
    )
  }
}

export default Counter
