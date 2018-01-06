import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Fears from '../pages/Fears'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/define" component={Fears} />
        {/* <Route exact path="/prevent" component={Prevent} />
        <Route exact path="/fix" component={Fix} />
        <Route exact path="/benefit" component={Benefit} />
        <Route exact path="/inaction" component={Inaction} />
        <Route exact path="/choice" component={Choice} /> */}
      </div>
    )
  }
}

export default App
