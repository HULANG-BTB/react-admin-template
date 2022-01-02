import { createStore } from 'redux'
import { reducers } from './reducers'

export type RootState = ReturnType<typeof reducers>

export const store = createStore(reducers)
