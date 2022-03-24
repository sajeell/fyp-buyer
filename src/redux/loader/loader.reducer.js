import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  loading: false,
  error: {},
  response: {},
}

const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case ActionsType.API_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case ActionsType.API_SUCCESS:
      return {
        ...state,
        response: action.payload,
      }
    default:
      return state
  }
}

export default loaderReducer
