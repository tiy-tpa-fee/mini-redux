import React from 'react'

const PersonView = ({ name, removePerson }) =>
  <li>
    <h2>
      {name}
    </h2>
    <button onClick={removePerson}>x</button>
  </li>

class PeopleListView extends React.Component {
  _submit = event => {
    event.preventDefault()
    this.props.addPerson(this.refs.name.value)
    this.refs.name.value = ''
  }

  render() {
    return (
      <main className="peopleList">
        <ul>
          {this.props.people.map((person, i) =>
            <PersonView {...person} removePerson={() => this.props.removePerson(i)} key={i} />
          )}
        </ul>
        <form onSubmit={this._submit}>
          <h3>New Person</h3>
          <input type="text" ref="name" placeholder="Name" />
          <button type="submit">Save</button>
        </form>
      </main>
    )
  }
}

export default PeopleListView
