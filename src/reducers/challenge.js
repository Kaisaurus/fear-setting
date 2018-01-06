import * as types from '../actions/types'

const defaultState = {
  challenge: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_CHALLENGE:
      return {
        ...state,
        challenge: action.payload
      }
    default:
      return state
  }
}
