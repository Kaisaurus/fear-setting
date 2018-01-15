import * as types from './types'

export function setChallenge(challenge) {
  return dispatch => {
    dispatch({ type: types.SET_CHALLENGE, payload: challenge })
  }
}
export function setFears(fears) {
  return dispatch => {
    dispatch({ type: types.SET_FEARS, payload: fears })
  }
}
export function removeFear(index) {
  return dispatch => {
    dispatch({ type: types.REMOVE_FEAR, payload: index })
  }
}
export function setPreventions(preventions, fearIndex) {
  return dispatch => {
    dispatch({
      type: types.SET_PREVENTIONS,
      payload: { preventions, fearIndex }
    })
  }
}
export function setFixes(fixes, fearIndex) {
  return dispatch => {
    dispatch({ type: types.SET_FIXES, payload: { fixes, fearIndex } })
  }
}
export function setBenefits(benefits) {
  return dispatch => {
    dispatch({ type: types.SET_BENEFTIS, payload: benefits })
  }
}
export function setConsequences(consequences) {
  return dispatch => {
    dispatch({ type: types.SET_CONSEQUENCES, payload: consequences })
  }
}
export function setAcceptable(acceptable) {
  return dispatch => {
    dispatch({ type: types.SET_ACCEPTABLE, payload: acceptable })
  }
}
