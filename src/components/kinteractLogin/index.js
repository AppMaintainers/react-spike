import React from 'react'
import Form from 'components/core/form'

export default props => {
  if (props && props.webdata && props.webdata.token && props.webdata.observations.length > 0) {
    return (
      <div>
        You are signed in

        <br /><br />

        {props.webdata.observations.map((observation, i) => (
          <div key={observation.uuid}>
            Observation {i} <br />
            {JSON.stringify(observation)}
            <br /><br />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ margin: '2em' }}>
      <p>Log into Kinteract</p>
      <Form onSubmit={() => props.validateLogin(document.getElementById('email').value, document.getElementById('password').value)}>
        <p>
          Email
          <br />
          <input name="email" id="email" placeholder="shehzad@kinteract.com" />
        </p>
        <p>
          Password
          <br />
          <input name="password" id="password" placeholder="********" type="password" />
        </p>
        <button>Log me in</button>
      </Form>
    </div>
  )
}
