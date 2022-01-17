import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  featuredProducts: [],
  error: {},
  response: {},
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.FEATURED_PRODUCTS:
      return {
        ...state,
        featuredProducts: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
