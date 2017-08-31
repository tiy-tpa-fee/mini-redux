import React, { Component } from 'react'
import T from 'prop-types'

class Counter extends Component {
  static propTypes = {
    count: T.number,
    increment: T.func.isRequired,
    decrement: T.func.isRequired
  }

  render() {
    return (
      <div className="Counter">
        <button onClick={this.props.decrement}>-</button>
        <span>
          {this.props.counter}
        </span>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}

export default Counter
