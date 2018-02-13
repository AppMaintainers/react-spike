const initialState = {
  observations: [],
}

export default function observations(state = initialState, action) {
  switch (action.type) {
    case 'observations/UPDATE':
      return [...action.payload]
    default:
      return state
  }
}
