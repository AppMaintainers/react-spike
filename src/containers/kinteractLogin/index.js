import React, { Component } from 'react'
import { connect } from 'react-redux'
import KinteractLogin from 'components/kinteractLogin'
import { validateLogin } from '../../redux/actions/user'
import { getObservations } from '../../redux/actions/observations'

class KinteractLoginContainer extends Component {
  render() {
    return (
      <KinteractLogin
        user={this.props.user}
        observations={this.props.observations}
        validateLogin={(email, pwd) => this.props.dispatch(validateLogin(email, pwd))}
        getObservations={(uuid, token) => this.props.dispatch(getObservations(uuid, token))}
      />
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user, observations: state.observations }
}

export default connect(mapStateToProps)(KinteractLoginContainer)
