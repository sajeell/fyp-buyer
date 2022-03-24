import ActionsType from '../utils/actions.type'

export const setLoading = (loading) => ({
  type: ActionsType.LOADING,
  payload: loading,
})

export const setDrawerPage = (drawerPage) => ({
  type: ActionsType.ACTIVE_PAGE,
  payload: drawerPage,
})

export const drawerPage = (page) => {
  return (dispatch) => {
    dispatch(setDrawerPage(page))
  }
}

export const loading = (loading) => {
  return (dispatch) => {
    dispatch(setLoading(loading))
  }
}
