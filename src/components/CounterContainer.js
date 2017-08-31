import { connect } from 'react-redux'
import CounterView from './CounterView'
import { increment, decrement } from '../actions'

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)
