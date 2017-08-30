import { connect } from 'react-redux'
import CounterView from './CounterView'
import { increment } from '../actions'

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch(increment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)
