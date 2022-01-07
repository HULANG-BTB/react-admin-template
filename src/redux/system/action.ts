import { IRoute } from '../../routes/routes'
import { treeToArray } from '../../utils/array'
import { SystemState } from './state'

export enum SystemActionType {
  SET_MENU = 'set_menu',
  ADD_TAG_VIEW = 'add_tag_view',
  REMOVE_TAG_VIEW = 'remove_tag_view',
  SET_TAG_VIEW = 'set_current_view'
}

export interface SystemAction {
  type: SystemActionType
  payload: any
}

export type SystemActions = typeof actions

export const actions = {
  [SystemActionType.SET_MENU]: (
    state: SystemState,
    payload: IRoute[]
  ): SystemState => {
    const flatMenus = treeToArray<IRoute>(payload)
    const tagViews: IRoute[] = flatMenus.filter((route) => route.affix)
    return {
      ...state,
      menus: payload,
      tagViews,
      flatMenus
    }
  },
  [SystemActionType.ADD_TAG_VIEW]: (
    state: SystemState,
    payload: string
  ): SystemState => {
    const { tagViews, flatMenus } = state
    const hasExist =
      tagViews.findIndex((tagView) => tagView.path === payload) !== -1

    // 如果标签已存在 直接激活
    if (hasExist) {
      return {
        ...state,
        currentTagView: payload
      }
    }
    // 菜单查找路由
    // 加入
    const menu = flatMenus.find((item) => item.path === payload)
    menu && tagViews.push(menu)
    return {
      ...state,
      currentTagView: payload
    }
  },
  [SystemActionType.REMOVE_TAG_VIEW]: (
    state: SystemState,
    payload: string
  ): SystemState => {
    const { tagViews, currentTagView } = state
    let newActive = payload
    const oldIndex = tagViews.findIndex((tagView) => tagView.path === payload)
    // 不存在 不移除
    if (oldIndex === -1) {
      return state
    }
    // 移除tag
    tagViews.splice(oldIndex, 1)
    // 重置当前激活
    if (currentTagView === newActive) {
      if (oldIndex >= tagViews.length) {
        newActive = tagViews[tagViews.length - 1].path
      } else {
        newActive = tagViews[oldIndex].path
      }
    } else {
      newActive = currentTagView
    }

    return {
      ...state,
      currentTagView: newActive
    }
  },
  [SystemActionType.SET_TAG_VIEW]: (
    state: SystemState,
    payload: string
  ): SystemState => {
    const { currentTagView } = state
    if (currentTagView === payload) {
      return { ...state }
    }
    return {
      ...state,
      currentTagView: payload
    }
  }
}
