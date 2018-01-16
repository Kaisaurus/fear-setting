import * as types from '../actions/types'

const defaultFear = { fear: '', preventions: ['', ''], fixes: ['', ''] }
const defaultState = {
  challenge: '',
  fears: Array(3).fill(defaultFear),
  benefits: Array(3).fill(''),
  consequences: Array(3).fill(''),
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
        fears: action.payload.map((fear, index) => {
          // this is not pretty...  any better way?
          const preventions = state.fears[index]
            ? state.fears[index].preventions
            : defaultFear.preventions
          const fixes = state.fears[index]
            ? state.fears[index].fixes
            : defaultFear.fixes
          return { fear, preventions, fixes }
        })
      }
    case types.REMOVE_FEAR: {
      const fears = state.fears
      fears.splice(action.payload, 1)
      return {
        ...state,
        fears
      }
    }
    case types.SET_PREVENTIONS: {
      const { preventions, fearIndex } = action.payload
      const fears = state.fears.map(
        (fear, index) => (index === fearIndex ? { ...fear, preventions } : fear)
      )
      return {
        ...state,
        fears
      }
    }
    case types.SET_FIXES: {
      const { fixes, fearIndex } = action.payload
      const fears = state.fears.map(
        (fear, index) => (index === fearIndex ? { ...fear, fixes } : fear)
      )
      return {
        ...state,
        fears
      }
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
