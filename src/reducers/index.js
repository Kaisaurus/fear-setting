// import { combineReducers } from 'redux'
import challenge from './challenge'
import { localeReducer } from 'react-localize-redux'

export default {
  challenge,
  locale: localeReducer
}
