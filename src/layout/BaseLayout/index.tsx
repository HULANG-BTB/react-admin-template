import './index.scss'

import { Breadcrumb, Layout, Menu } from 'antd'
import React, { Suspense, useState } from 'react'
import * as Icon from '@ant-design/icons'
import {
  Link,
  useLocation,
  Outlet,
  useMatch,
  PathMatch
} from 'react-router-dom'
import { IRoute, asyncRoutes } from '../../routes/routes'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
import Loading from '../../components/Loading'

const { Header, Sider, Content } = Layout

type MatchRoute = Pick<IRoute, 'title' | 'path'>

const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSideMenu = () => {
    setCollapsed(!collapsed)
  }

  const { pathname } = useLocation()

  const routeMatches: MatchRoute[] = []

  const createMenu = (routes: IRoute[]) => {
    return routes
      .filter((route) => route.hidden !== true)
      .map((route) => {
        const mached = useMatch({
          path: route.path,
          end: false
        })

        if (mached) {
          routeMatches.push({
            title: route.title,
            path: route.path
          })
        }

        const MenuIcon = route.icon && (Icon[route.icon] as React.FC)
        if (route.children) {
          return (
            <SubMenu
              key={route.path}
              title={route.title}
              icon={MenuIcon ? <MenuIcon /> : null}
            >
              {createMenu(route.children)}
            </SubMenu>
          )
        }
        return (
          <Menu.Item
            key={route.path}
            title={route.title}
            icon={MenuIcon ? <MenuIcon /> : null}
          >
            <Link to={route.path}>{route.title}</Link>
          </Menu.Item>
        )
      })
  }

  const menus = createMenu(asyncRoutes)

  return (
    <Layout className="app-container">
      <Sider
        className="menu-container"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={routeMatches.map((match) => match.path)}
        >
          {menus}
        </Menu>
      </Sider>
      <Layout className="content-container">
        <Header className="app-header" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggleSideMenu
            }
          )}
        </Header>
        <Content className="app-content">
          <div className="app-breadcrumb">
            <Breadcrumb>
              {routeMatches.map((match) => (
                <Breadcrumb.Item key={match.path}>
                  {match.title}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>
          <div className="app-main">
            <div className="main-container">
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
