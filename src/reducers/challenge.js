import * as types from '../actions/types'

const defaultState = {
  challenge: '',
  fears: ['', '', ''],
  preventions: {},
  fixes: {},
  benefits: [''],
  consequences: [''],
  acceptable: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_CHALLENGE:
      return {
        ...state,
        challenge: action.payload
      }
    case types.SET_FEARS:
      return {
        ...state,
        fears: action.payload
      }
    case types.SET_PREVENTIONS:
      return {
        ...state,
        preventions: action.payload
      }
    case types.SET_FIXES:
      return {
        ...state,
        fixes: action.payload
      }
    case types.SET_BENEFTIS:
      return {
        ...state,
        benefits: action.payload
      }
    case types.SET_CONSEQUENCES:
      return {
        ...state,
        consequences: action.payload
      }
    case types.SET_ACCEPTABLE:
      return {
        ...state,
        acceptable: action.payload
      }
    default:
      return state
  }
}
