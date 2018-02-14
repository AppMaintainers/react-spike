import React from 'react'
import Form from 'components/core/form'
import _ from 'lodash'

export default props => {
  if (_.get(props, 'user.token', null) && _.get(props, 'observations', []).length > 0) {
    return (
      <div>
        You are signed in

        <br /><br />

        <button
          onClick={() => {
            window.location = `https://kinteract-staging.herokuapp.com/integrations/react/sign_ups?uuid=${props.user.uuid}&token=${props.user.token}&url=${encodeURI('https://kinteract-staging.herokuapp.com/children')}`
          }}
          href="#"
        >
          Visit your profile at Rails side
        </button>

        <br /><br />

        {props.observations.map((observation, i) => (
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
