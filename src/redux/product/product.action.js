import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'

const Url = 'http://localhost:3000/'

export const setFeaturedProducts = (product) => ({
  type: ActionsType.FEATURED_PRODUCTS,
  payload: product,
})

export const getFeaturedProducts = (token) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .get(`${Url}product/featured`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setFeaturedProducts(response))
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
