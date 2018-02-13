import fetch from 'cross-fetch'
import { getObservations } from './observations'

export const updateUser = userData => {
  return { type: 'user/UPDATE', payload: userData }
}

export function validateLogin(email, password) {
  return function(dispatch) {
    return fetch('http://localhost:3001/api/v2/sessions', {
      method: 'POST',
      body: JSON.stringify({ user: { email: email, password: password } }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json(), error => console.log('An error occurred.', error))
      .then(json => {
        dispatch(getObservations(json.uuid, json.token))
        dispatch(updateUser(json))
      })
  }
}
