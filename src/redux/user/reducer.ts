import { UserAction, actions } from './action'
import { UserState, state as userState } from './state'

export const reducer = (
  state: UserState = userState,
  action: UserAction
): UserState => {
  return actions[action.type]?.(state) ?? state
}
