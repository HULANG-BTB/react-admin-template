import { Menu } from 'antd'
import React from 'react'
import * as Icon from '@ant-design/icons'
import { Link, useLocation, useMatch } from 'react-router-dom'
import { asyncRoutes, IRoute } from '../../routes/routes'
import { RouteMatched } from '.'

export interface SiderProps {
  collapsed?: boolean
}

const Sider: React.FC<SiderProps> = (props) => {
  let { pathname } = useLocation()

  const routeMatches: RouteMatched[] = []

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
          >
            {route.external === true ? (
              <a href={route.path} target="_blank">
                {route.title}
              </a>
            ) : (
              <Link to={route.path}>{route.title}</Link>
            )}
          </Menu.Item>
        )
      })
  }

  const menus = createMenu(asyncRoutes)

  return (
    <div className="aside">
      <div className="logo">Oibit-Admin</div>
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
