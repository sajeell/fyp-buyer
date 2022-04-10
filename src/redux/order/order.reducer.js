import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  biddingID: '',
  buyerID: '',
  productID: '',
  address: '',
  price: 0,
  product: {},
  bidding: {},
  error: {},
  response: {},
}

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.SET_BIDDING_ID:
      return {
        ...state,
        biddingID: action.payload,
      }
    case ActionsType.SET_BUYER_ID:
      return {
        ...state,
        buyerID: action.payload,
      }
    case ActionsType.SET_PRODUCT_ID:
      return {
        ...state,
        productID: action.payload,
      }
    case ActionsType.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      }
    case ActionsType.SET_PRICE:
      return {
        ...state,
        price: action.payload,
      }
    case ActionsType.SET_CHECKOUT_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    case ActionsType.SET_CHECKOUT_BIDDING:
      return {
        ...state,
        bidding: action.payload,
      }
    default:
      return state
  }
}

export default orderReducer
