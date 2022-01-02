import { createStore } from 'redux'
import { reducers } from './reducers'

export interface RootState {}

export const store = createStore(reducers)
