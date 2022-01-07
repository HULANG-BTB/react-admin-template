import { IRoute } from '../../routes/routes'

export interface SystemState {
  menus: IRoute[]
  flatMenus: IRoute[]
  tagViews: IRoute[]
  currentTagView: string
}

export const state: SystemState = {
  menus: [],
  flatMenus: [],
  tagViews: [],
  currentTagView: ''
}
