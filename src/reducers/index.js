import { combineReducers } from 'redux'
import challenge from './challenge'
import { localeReducer } from 'react-localize-redux'

// this isn't really necessary since there is only 1 reduced
// but kept it this way to make it easier to add future functionality
const reducers = combineReducers({
  challenge,
  locale: localeReducer
})

export default reducers
