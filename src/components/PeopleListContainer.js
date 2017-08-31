import { connect } from 'react-redux'
import { addPerson, removePerson } from '../actions'
import PeopleListView from './PeopleListView'

const mapStateToProps = state => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPerson: name => dispatch(addPerson(name)),
    removePerson: index => dispatch(removePerson(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleListView)
