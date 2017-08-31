import { connect } from 'react-redux'
import CounterView from './CounterView'
import { increment, decrement } from '../actions'

const mapStateToProps = (state, { index }) => {
  return {
    counter: state.people[index].counter
  }
}

const mapDispatchToProps = (dispatch, { index }) => {
  return {
    decrement: () => dispatch(decrement(index)),
    increment: () => dispatch(increment(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)
