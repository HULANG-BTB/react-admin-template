import { MenuAction, actions } from './action'
import { SystemState, state as systemState } from './state'

export const reducer = (
  state: SystemState = systemState,
  action: MenuAction
): SystemState => {
  return actions[action.type]?.(state) ?? state
}
