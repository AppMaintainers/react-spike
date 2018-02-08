import React, { Component } from 'react'
import { connect } from 'react-redux'
import KinteractLogin from 'components/kinteractLogin'
import { validateLogin } from '../../redux/actions/kinteract'

class KinteractLoginContainer extends Component {
  render() {
    return <KinteractLogin webdata={this.props.webdata} validateLogin={(email, pwd) => this.props.dispatch(validateLogin(email, pwd))} />
  }
}

export default connect(state => state.kinteract)(KinteractLoginContainer)
