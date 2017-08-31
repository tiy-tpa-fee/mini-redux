const initialState = []

const people = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, { name: action.name }]
    default:
      return state
  }
}

export default people
