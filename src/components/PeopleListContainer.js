import { connect } from 'react-redux'
import { addPerson } from '../actions'
import PeopleListView from './PeopleListView'

const mapStateToProps = state => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPerson: name => dispatch(addPerson(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleListView)
