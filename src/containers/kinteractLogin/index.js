import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateKey } from 'redux/actions/kinteract'
import KinteractLogin from 'components/kinteractLogin'

class KinteractLoginContainer extends Component {
  render() {
    return <KinteractLogin webdata={this.props.webdata} onLogin={keyPair => this.props.dispatch(updateKey(keyPair))} />
  }
}

export default connect(state => state.kinteract)(KinteractLoginContainer)
