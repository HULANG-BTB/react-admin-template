import { UserState } from './state'

export enum UserActionType {
  SET_USER = 'set_user'
}

export interface UserAction {
  type: UserActionType
  payload: any
}

export type UserActions = {
  [P in UserActionType]: (state: UserState) => UserState
}

export const actions: UserActions = {
  [UserActionType.SET_USER]: (state) => {
    return state
  }
}
