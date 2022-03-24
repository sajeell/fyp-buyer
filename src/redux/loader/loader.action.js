import ActionsType from '../utils/actions.type'
import URL from '../../constants/constants'

const Url = URL

export const setLoading = (loading) => ({
  type: ActionsType.LOADING,
  payload: loading,
})

export const loading = (loading) => {
  return (dispatch) => {
    dispatch(setLoading(loading))
  }
}
