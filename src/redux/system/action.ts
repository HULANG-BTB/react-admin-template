import { SystemState } from './state'

export enum MenuActionType {
  SET_MENU = 'set_menu'
}

export interface MenuAction {
  type: MenuActionType
  payload: any
}

export type MenuActions = {
  [P in MenuActionType]: (state: SystemState) => SystemState
}

export const actions: MenuActions = {
  [MenuActionType.SET_MENU]: (state) => {
    return state
  }
}
