import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  featuredProducts: [],
  featuredAntiques: [],
  featuredHandmade: [],
  antiques: [],
  handmade: [],
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
    case ActionsType.FEATURED_HANDMADE:
      return {
        ...state,
        featuredHandmade: action.payload,
      }
    case ActionsType.FEATURED_ANTIQUES:
      return {
        ...state,
        featuredAntiques: action.payload,
      }
    case ActionsType.ANTIQUES:
      return {
        ...state,
        antiques: action.payload,
      }
    case ActionsType.HANDMADE:
      return {
        ...state,
        handmade: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
