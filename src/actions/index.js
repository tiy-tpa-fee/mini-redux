export const increment = index => {
  return { type: 'INCREMENT', index }
}

export const decrement = index => {
  return { type: 'DECREMENT', index }
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
