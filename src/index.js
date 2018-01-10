import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './utils/store'
import { initLocalize } from './utils/localization'
import 'semantic-ui-css/semantic.min.css'
import { ThemeProvider } from 'styled-components'
import mainTheme from './themes/mainTheme'

initLocalize(store)

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </PersistGate>,
  document.getElementById('root')
)

registerServiceWorker()
