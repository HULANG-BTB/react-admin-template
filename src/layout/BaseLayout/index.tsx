import '../index.scss'

import { Layout } from 'antd'
import React, { useState } from 'react'
import { IRoute } from '../../routes/routes'
import Sider from './sider'
import Header from './header'
import Content from './content'

export type RouteMatched = Pick<IRoute, 'title' | 'path'>

const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSideMenu = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="app-container">
      <Layout.Sider
        className="aside-container"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Sider collapsed={collapsed} />
      </Layout.Sider>
      <Layout className="main-container">
        <Layout.Header className="header-container" style={{ padding: 0 }}>
          <Header collapsed={collapsed} toggleSideMenu={toggleSideMenu} />
        </Layout.Header>
        <Layout.Content className="content-container">
          <Content />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
