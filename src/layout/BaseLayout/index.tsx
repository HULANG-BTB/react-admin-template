import './index.scss'

import {Breadcrumb, Layout, Menu} from 'antd'
import React, {useState} from 'react'
import * as Icon from '@ant-design/icons'
import {Route, Link, useLocation, Routes, Outlet} from 'react-router-dom'
import routes, {IMenu, IMenuBase} from '../../routes/routes'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import {components} from '../../pages'
import SubMenu from 'antd/lib/menu/SubMenu'

const {Header, Sider, Content} = Layout

export const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSideMenu = () => {
    setCollapsed(!collapsed)
  }

  const createMenu = (routes: IMenu[]) => {
    const menu = (route: IMenuBase) => {
      const MenuIcon = route.icon && (Icon[route.icon] as React.FC)
      return (
        <Menu.Item
          key={route.path}
          title={route.title}
          icon={MenuIcon ? <MenuIcon/> : undefined}
        >
          <Link to={route.path}>
            {route.title}
          </Link>
        </Menu.Item>
      )
    }

    const subMenu = (route: IMenu) => {
      if (route.children) {
        const MenuIcon = route.icon && (Icon[route.icon] as React.FC)
        return (
          <SubMenu
            key={route.path}
            title={route.title}
            icon={MenuIcon ? <MenuIcon/> : undefined}
          >
            {createMenu(route.children)}
          </SubMenu>
        )
      }
    }

    return routes.map((route) => {
      return route.component ? menu(route) : subMenu(route)
    })
  }

  const {pathname} = useLocation()



  const createRoutes = (routes: IMenu[]) => {
    const retRoutes: JSX.Element[] = []
    routes.forEach((route) => {
      if (route.component) {
        const Component = components[route.component]
        retRoutes.push(
          <Route
            key={route.path}
            path={route.path}
            element={Component ? <Component/> : undefined}
          />
        )
      }
      if (route.children) {
        retRoutes.push(
          <Route key={route.path} path={route.path} element={<Outlet/>}>
            {createRoutes(route.children)}
          </Route>
        )
      }
    })
    return retRoutes
  }

  return (
    <Layout className="app-container">
      <Sider
        className="menu-container"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo"/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          {createMenu(routes)}
        </Menu>
      </Sider>
      <Layout className="content-container">
        <Header className="app-header" style={{padding: 0}}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggleSideMenu
            }
          )}
        </Header>
        <Content className="app-content">
          <div className="app-tab-view">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application List</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="main-content-wrapper">
            <div className="main-container">
              <Routes>{createRoutes(routes)}</Routes>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
