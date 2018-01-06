import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Define extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <Button>Click Here</Button>
        </Link>
        <p>lele</p>
      </div>
    )
  }
}

export default Define
