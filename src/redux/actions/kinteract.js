import fetch from 'cross-fetch'

export const updateKey = keyPair => {
  return { type: 'kinteract/UPDATE_KEY', payload: keyPair }
}

export function getObservations(uuid, token) {
  return function(dispatch) {
    return fetch(`http://localhost:3001/api/v2/observations?auth[uuid]=${uuid}&auth[token]=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json(), error => console.log('An error occurred.', error))
      .then(json => {
        dispatch(updateKey({ observations: json.data }))
      })
  }
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
        dispatch(updateKey({ uuid: json.uuid, token: json.token }))
      })
  }
}
