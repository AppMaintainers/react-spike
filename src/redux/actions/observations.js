import fetch from 'cross-fetch'

export const updateObservations = observationsData => {
  return { type: 'observations/UPDATE', payload: observationsData }
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
        dispatch(updateObservations(json.data))
      })
  }
}
