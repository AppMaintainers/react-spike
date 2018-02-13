const initialState = {
  user: null,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'user/UPDATE':
      return { ...action.payload }
    default:
      return state
  }
}
