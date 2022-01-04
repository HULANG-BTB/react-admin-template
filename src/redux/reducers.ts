import { combineReducers } from 'redux'
import { reducer as userReducer } from './user/reducer'
import { reducer as systemReducer } from './system/reducer'

export const reducers = combineReducers({
  user: userReducer,
  system: systemReducer
})
