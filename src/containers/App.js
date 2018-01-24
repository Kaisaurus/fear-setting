import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'
// import Analytics from '../utils/Analytics'
import Define from '../pages/Define'
import Fear from '../pages/Fear'
import Prevent from '../pages/Prevent'
import Fix from '../pages/Fix'
import Benefit from '../pages/Benefit'
import Inaction from '../pages/Inaction'
import Choice from '../pages/Choice'
import RoughDesign from '../pages/RoughDesign'
import Logo from '../components/Logo'
import PageWrapper from '../components/PageWrapper'
import paths from '../utils/paths'
import SurveyForm from '../components/forms/SurveyForm'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageWrapper>
          <Route path={paths.root} component={Logo} />
          {/* <Route path={paths.root} component={Analytics} /> */}
          <Route exact path={paths.root} component={Define} />
          <Route exact path={paths.fear} component={Fear} />
          <Route exact path={paths.prevent} component={Prevent} />
          <Route exact path={paths.fix} component={Fix} />
          <Route exact path={paths.benefit} component={Benefit} />
          <Route exact path={paths.inaction} component={Inaction} />
          <Route exact path={paths.choice} component={Choice} />
          <Route exact path={paths.design} component={RoughDesign} />
          <Route exact path={paths.survey} component={SurveyForm} />
        </PageWrapper>
      </React.Fragment>
    )
  }
}

export default App
