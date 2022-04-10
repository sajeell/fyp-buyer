import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'
import constants from '../../constants/constants'

const Url = constants.URL

export const setBiddingID = (id) => ({
  type: ActionsType.SET_BIDDING_ID,
  payload: id,
})

export const setSellerID = (id) => ({
  type: ActionsType.SET_SELLER_ID,
  payload: id,
})

export const setProductID = (id) => ({
  type: ActionsType.SET_PRODUCT_ID,
  payload: id,
})

export const setBuyerID = (id) => ({
  type: ActionsType.SET_BUYER_ID,
  payload: id,
})

export const setAddress = (address) => ({
  type: ActionsType.SET_BUYER_ID,
  payload: address,
})

export const setProduct = (product) => ({
  type: ActionsType.SET_CHECKOUT_PRODUCT,
  payload: product,
})

export const setBidding = (bidding) => ({
  type: ActionsType.SET_CHECKOUT_BIDDING,
  payload: bidding,
})

export const setPrice = (price) => ({
  type: ActionsType.SET_PRICE,
  payload: price,
})

export const checkout = (token, data) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .put(
        `${Url}user/address/${data.buyerID}`,
        { address: data.address },
        {
          headers: headers,
        },
      )
      .then((resp) => {
        if (resp.status === 200 || resp.status === 201) {
          axios
            .post(`${Url}order/create/bidding`, data, {
              headers: headers,
            })
            .then((resp) => {
              if (resp.status === 200 || resp.status === 201) {
                toast.success('Success')

                window.location.href = '/landing'
              }
            })
            .catch((error) => {
              const err = error
              if (err.response) {
                toast.error(err.response.data.message, {
                  theme: 'colored',
                  style: {
                    borderRadius: 5,
                  },
                })
              }
            })
        }
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          toast.error(err.response.data.message, {
            theme: 'colored',
            style: {
              borderRadius: 5,
            },
          })
        }
      })
  }
}
