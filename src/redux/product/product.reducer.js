import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  featuredProducts: [],
  featuredAntiques: [],
  featuredHandmade: [],
  antiques: [],
  handmade: [],
  biddingCartDetails: [],
  productDetail: {},
  productBiddingDetails: {},
  verifyBidding: false,
  intermediaryID: '',
  requests: [],
  page: 0,
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
    case ActionsType.PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      }
    case ActionsType.SET_PAGE_NUMBER:
      return {
        ...state,
        page: action.payload,
      }
    case ActionsType.SET_BIDDING_CART_DETAILS:
      return {
        ...state,
        biddingCartDetails: action.payload,
      }
    case ActionsType.SET_PRODUCT_BIDDING_DETAILS:
      return {
        ...state,
        productBiddingDetails: action.payload,
      }
    case ActionsType.SET_VERIFY_BIDDING:
      return {
        ...state,
        verifyBidding: action.payload,
      }
    case ActionsType.SET_INTERMEDIARY_ID:
      return {
        ...state,
        intermediaryID: action.payload,
      }
    case ActionsType.SET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
