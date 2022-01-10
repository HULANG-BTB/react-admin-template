import { Menu } from 'antd'
import React from 'react'
import * as Icon from '@ant-design/icons'
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom'
import { asyncRoutes, IRoute } from '../../routes/routes'
import { useDispatch, useSelector } from 'react-redux'
import { SystemActionType } from '../../redux/system/action'
import { RootState } from '../../redux'
import { SystemState } from '../../redux/system/state'

const Sider: React.FC = () => {
  const systemStore = useSelector<RootState, SystemState>(
    (state) => state.system
  )

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const location = useLocation()

  const onOpenMenu = (route: IRoute) => {
    if (route.external) {
      window.open(route.path)
    } else if (route.component) {
      navigate(route.path)
      dispatch({
        type: SystemActionType.ADD_TAG_VIEW,
        payload: route.path
      })
    } else {
      navigate('/404')
    }
  }

  const defaultOpenKeys: string[] = []

  const matches = matchRoutes(systemStore.menus, location) || []

  if (matches.length > 0) {
    if (matches.length >= 2) {
      for (let index = 0; index < matches.length - 1; index++) {
        defaultOpenKeys.push(matches[index].pathname)
      }
    }
    const { route } = matches[matches.length - 1]

    if (
      systemStore.tagViews.findIndex((item) => item.path === route.path) === -1
    ) {
      navigate(route.path || '/')
      dispatch({
        type: SystemActionType.ADD_TAG_VIEW,
        payload: route.path
      })
    }
    if (systemStore.currentTagView !== route.path) {
      dispatch({
        type: SystemActionType.SET_TAG_VIEW,
        payload: route.path
      })
    }
  }

  const createMenu = (routes: IRoute[]) => {
    return routes
      .filter((route) => route.hidden !== true)
      .map((route) => {
        const MenuIcon = route.icon && (Icon[route.icon] as React.FC)
        if (route.children) {
          return (
            <Menu.SubMenu
              key={route.path}
              title={route.title}
              icon={MenuIcon ? <MenuIcon /> : null}
            >
              {createMenu(route.children)}
            </Menu.SubMenu>
          )
        }
        return (
          <Menu.Item
            key={route.path}
            title={route.title}
            icon={MenuIcon ? <MenuIcon /> : null}
            onClick={() => onOpenMenu(route)}
          >
            {route.title}
          </Menu.Item>
        )
      })
  }

  return (
    <div className="aside">
      <div className="logo">Oibit-Admin</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={[systemStore.currentTagView]}
      >
        {createMenu(systemStore.menus)}
      </Menu>
    </div>
  )
}

export default Sider
