import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loaderReducer from './loader/loader.reducer'
import productReducer from './product/product.reducer'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  loader: loaderReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'product', 'loader'],
}

export default persistReducer(persistConfig, rootReducer)
