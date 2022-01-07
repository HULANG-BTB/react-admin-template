import { SystemAction, actions } from './action'
import { SystemState, state as systemState } from './state'

export const reducer = (
  state: SystemState = systemState,
  action: SystemAction
): SystemState => {
  return actions[action.type]?.(state, action.payload) ?? state
}
