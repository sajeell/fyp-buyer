import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productReducer from './product/product.reducer'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'product'],
}

export default persistReducer(persistConfig, rootReducer)
