import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Define from '../pages/Define'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/define" component={Define} />
      </div>
    )
  }
}

export default App
