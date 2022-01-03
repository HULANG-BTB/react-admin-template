import { Layout, Menu } from 'antd'
import React from 'react'
import * as Icon from '@ant-design/icons'
import { Link, useLocation, useMatch } from 'react-router-dom'
import { IRoute, staticRoutes } from '../../routes/routes'
import { RouteMatched } from '.'
import { MenuState, Permission } from '../../redux/menu/state'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { uuid } from '../../utils/string'

export interface SiderProps {
  collapsed?: boolean
}

const Sider: React.FC<SiderProps> = (props) => {
  const { pathname } = useLocation()

  const routeMatches: RouteMatched[] = []

  const menuState = useSelector<RootState, MenuState>((state) => state.menu)

  const createMenu = (routes: IRoute[]) => {
    return routes
      .filter((route) => route.hidden !== true)
      .map((route) => {
        const matched = useMatch({
          path: route.path,
          end: false
        })

        if (matched) {
          routeMatches.push({
            title: route.title,
            path: route.path
          })
        }

        const MenuIcon = route.icon && (Icon[route.icon] as React.FC)
        if (route.children) {
          return (
            <Menu.SubMenu
              key={uuid()}
              title={route.title}
              icon={MenuIcon ? <MenuIcon /> : null}
            >
              {createMenu(route.children)}
            </Menu.SubMenu>
          )
        }
        return (
          <Menu.Item
            key={uuid()}
            title={route.title}
            icon={MenuIcon ? <MenuIcon /> : null}
          >
            <Link to={route.path}>{route.title}</Link>
          </Menu.Item>
        )
      })
  }

  const generateTreeRoutes = (data: Permission[], pid: string | null) => {
    const ret: IRoute[] = []
    data.forEach((item) => {
      if (item.parentId === pid) {
        const route: IRoute = {
          path: '',
          title: item.name
        }
        if (item.function) {
          route.path = item.function.code.replaceAll(':', '-')
        }
        const child = generateTreeRoutes(data, item.id)
        if (child.length) {
          route.children = child
        }
        ret.push(route)
      }
    })
    return ret
  }

  const menus = createMenu(generateTreeRoutes(menuState.menus, null))

  return (
    <div className="aside">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={routeMatches.map((match) => match.path)}
      >
        {menus}
      </Menu>
    </div>
  )
}

export default Sider
