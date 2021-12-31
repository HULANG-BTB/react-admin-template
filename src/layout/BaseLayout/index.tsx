import './index.scss'

import {Breadcrumb, Layout, Menu, Spin} from 'antd'
import React, {Suspense, useState} from 'react'
import * as Icon from '@ant-design/icons'
import {Link, useLocation, Outlet} from 'react-router-dom'
import {IRoute, asyncRoutes} from '../../routes/routes'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'

const {Header, Sider, Content} = Layout

const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSideMenu = () => {
    setCollapsed(!collapsed)
  }

  const createMenu = (routes: IRoute[]) => {
    return routes.filter(route => route.hidden !== true).map((route) => {
      const MenuIcon = route.icon && (Icon[route.icon] as React.FC)
      if (route.children) {
        return (
          <SubMenu
            key={route.path}
            title={route.title}
            icon={MenuIcon ? <MenuIcon/> : null}
          >
            {createMenu(route.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item
          key={route.path}
          title={route.title}
          icon={MenuIcon ? <MenuIcon/> : null}
        >
          <Link to={route.path}>
            {route.title}
          </Link>
        </Menu.Item>
      )
    })
  }

  const {pathname} = useLocation()

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
          {createMenu(asyncRoutes)}
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
          <div className="app-breadcrumb">
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
          <div className="app-main">
            <div className="main-container">
              <Suspense fallback={<Spin/>}>
                <Outlet/>
              </Suspense>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
