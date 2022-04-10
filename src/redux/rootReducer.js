import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loaderReducer from './loader/loader.reducer'
import orderReducer from './order/order.reducer'
import productReducer from './product/product.reducer'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  loader: loaderReducer,
  order: orderReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

export default persistReducer(persistConfig, rootReducer)
