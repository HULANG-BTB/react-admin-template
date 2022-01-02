import { combineReducers } from 'redux'
import { reducer as userReducer } from './user/reducer'
import { reducer as menuReducer } from './user/reducer'

export const reducers = combineReducers({
  user: userReducer,
  menu: menuReducer
})
