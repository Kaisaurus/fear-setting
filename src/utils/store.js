import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducers from '../reducers'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistCombineReducers } from 'redux-persist'

const config = {
  key: 'root',
  storage
}

const reducer = persistCombineReducers(config, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = composeEnhancers(
  applyMiddleware(promise(), thunk, createLogger())
)

export const store = createStore(reducer, undefined, middleware)

export const persistor = persistStore(store)
// persistor.purge() // purge store for testing
