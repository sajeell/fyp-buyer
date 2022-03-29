import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'
import URL from '../../constants/constants'

const Url = URL

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

export const setProductDetail = (product) => ({
  type: ActionsType.PRODUCT_DETAIL,
  payload: product,
})

export const setPageNumber = (page) => ({
  type: ActionsType.SET_PAGE_NUMBER,
  payload: page < 0 ? 0 : page,
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

export const getAntiques = (token, page = 0) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .get(
        `${Url}product/category/antique/?filter={"category":{"$eq":"Antique"}}&limit=10&page=${page}`,
        { headers: headers },
      )
      .then((resp) => {
        if (page < 0) {
          return
        }

        let response = resp.data

        dispatch(setAntiques(response.data))

        dispatch(setPageNumber(response.data.pagination.page))
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

export const getHandmade = (token, page = 0) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .get(
        `${Url}product/category/handmade/?filter={"category":{"$eq":"Antique"}}&limit=10&page=${page}`,
        { headers: headers },
      )
      .then((resp) => {
        if (page < 0) {
          return
        }

        let response = resp.data
        dispatch(setHandmade(response.data))
        dispatch(setPageNumber(response.data.pagination.page))
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

export const getProduct = (token, id) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    axios
      .get(`${Url}product/by/${id}`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setProductDetail(response))
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
