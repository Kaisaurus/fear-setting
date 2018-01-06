import * as types from './types'

export function setChallenge(challenge) {
  return dispatch => {
    dispatch({ type: types.SET_CHALLENGE, payload: challenge })
  }
}
