const initialState = []

const people = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, { name: action.name, counter: 0 }]
    case 'REMOVE_PERSON':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case 'INCREMENT':
      return (() => {
        const { name, counter } = state[action.index]
        return [
          ...state.slice(0, action.index),
          { name, counter: counter + 1 },
          ...state.slice(action.index + 1)
        ]
      })()
    case 'DECREMENT':
      return (() => {
        const { name, counter } = state[action.index]
        return [
          ...state.slice(0, action.index),
          { name, counter: counter - 1 },
          ...state.slice(action.index + 1)
        ]
      })()
    default:
      return state
  }
}

export default people
