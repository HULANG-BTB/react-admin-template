import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Avatar, Badge, Dropdown, Menu } from 'antd'
import BreadCrumb from './bread-crumb'

export interface HeaderProps {
  collapsed: boolean
  toggleSideMenu: () => void
}

const Header: React.FC<HeaderProps> = (props) => {
  const menu = (
    <Menu>
      <Menu.Item key={1}>1st menu item</Menu.Item>
      <Menu.Item key={2} disabled>
        2nd menu item (disabled)
      </Menu.Item>
      <Menu.Item key={3} disabled>
        3rd menu item (disabled)
      </Menu.Item>
      <Menu.Item key={4} danger>
        Log Out
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-trigger">
          {React.createElement(
            props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              onClick: props.toggleSideMenu
            }
          )}
        </div>
        <BreadCrumb />
      </div>
      <div className="header-right">
        <div className="user-area" style={{ padding: '0 20px' }}>
          <div style={{ padding: '0 20px', fontSize: '16px' }}>
            中午好，管理员!
          </div>
          <Dropdown overlay={menu}>
            <Badge count={1} size="small">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            </Badge>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Header
