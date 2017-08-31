const initialState = []

const people = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, { name: action.name }]
    case 'REMOVE_PERSON':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    default:
      return state
  }
}

export default people
