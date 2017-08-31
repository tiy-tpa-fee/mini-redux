export const increment = () => {
  return { type: 'INCREMENT' }
}

export const decrement = () => {
  return { type: 'DECREMENT' }
}

export const addPerson = name => {
  return {
    type: 'ADD_PERSON',
    name
  }
}

export const removePerson = index => {
  return {
    type: 'REMOVE_PERSON',
    index
  }
}
