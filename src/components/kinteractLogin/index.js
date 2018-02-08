import React from 'react'
import Form from 'components/core/form'

export default props => {
  if (props && props.webdata && props.webdata.token) {
    return <div>valami</div>
  }

  return (
    <div>
      <p>Log into Kinteract</p>
      <Form onSubmit={() => props.onLogin({ token: new Date() })}>
        <p>
          Email
          <br />
          <input name="email" placeholder="shehzad@kinteract.com" />
        </p>
        <p>
          Password
          <br />
          <input name="password" placeholder="********" type="password" />
        </p>
        <button>Log me in</button>
      </Form>
    </div>
  )
}
