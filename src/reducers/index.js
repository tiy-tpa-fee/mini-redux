// For every action, this function will recieve the current state
// and the action, and should return what the next state should be.
import { combineReducers } from 'redux'
import counter from './counter'
import people from './people'

export default combineReducers({
  counter,
  people
})
