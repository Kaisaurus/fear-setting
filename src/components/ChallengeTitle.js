import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ChallengeTitle extends Component {
  static propTypes = {
    challenge: PropTypes.string
  }

  render() {
    const { challenge } = this.props
    const emptyFiller = <Link to="/">Go back to fill this in</Link>
    return <Header as="h3">What if I {challenge || emptyFiller}</Header>
  }
}

const mapStateToProps = ({ challenge }) => ({
  challenge: challenge.challenge
})

export default connect(mapStateToProps)(ChallengeTitle)
