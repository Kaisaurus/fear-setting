import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'
import Define from '../pages/Define'
import Fear from '../pages/Fear'
import Prevent from '../pages/Prevent'
import Fix from '../pages/Fix'
import Benefit from '../pages/Benefit'
import Inaction from '../pages/Inaction'
import Choice from '../pages/Choice'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Define} />
        <Route exact path="/define" component={Fear} />
        <Route exact path="/prevent" component={Prevent} />
        <Route exact path="/fix" component={Fix} />
        <Route exact path="/benefit" component={Benefit} />
        <Route exact path="/inaction" component={Inaction} />
        <Route exact path="/choice" component={Choice} />
      </div>
    )
  }
}

export default App
