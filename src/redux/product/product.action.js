import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'

const Url = 'http://localhost:3000/'

export const setFeaturedProducts = (product) => ({
  type: ActionsType.FEATURED_PRODUCTS,
  payload: product,
})

export const setFeaturedAntiques = (product) => ({
  type: ActionsType.FEATURED_ANTIQUES,
  payload: product,
})

export const setFeaturedHandmade = (product) => ({
  type: ActionsType.FEATURED_HANDMADE,
  payload: product,
})

export const setAntiques = (product) => ({
  type: ActionsType.ANTIQUES,
  payload: product,
})

export const setHandmade = (product) => ({
  type: ActionsType.HANDMADE,
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

export const getFeaturedAntiques = (token) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .get(`${Url}product/featured-antiques`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setFeaturedAntiques(response))
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

export const getFeaturedHandmade = (token) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .get(`${Url}product/featured-handmade`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setFeaturedHandmade(response))
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

export const getAntiques = (token) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .get(`${Url}product/antiques`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setAntiques(response))
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

export const getHandmade = (token) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .get(`${Url}product/handmade`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setHandmade(response))
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
