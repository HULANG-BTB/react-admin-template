import { MenuAction, actions } from './action'
import { MenuState, state as userState } from './state'

export const reducer = (
  state: MenuState = userState,
  action: MenuAction
): MenuState => {
  return actions[action.type]?.(state) ?? state
}
