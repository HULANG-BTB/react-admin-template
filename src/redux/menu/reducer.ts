import { MenuAction, actions } from './action'
import { MenuState, state as menuState } from './state'

export const reducer = (
  state: MenuState = menuState,
  action: MenuAction
): MenuState => {
  return actions[action.type]?.(state) ?? state
}
