/* eslint-disable no-shadow */
const initialState = {
  webdata: {},
}

export default function kinteract(state = initialState, action) {
  switch (action.type) {
    case 'kinteract/UPDATE_KEY':
      return { webdata: Object.assign({}, state.webdata, action.payload) }
    default:
      return state
  }
}
