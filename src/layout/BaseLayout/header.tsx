import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

export interface HeaderProps {
  collapsed: boolean
  toggleSideMenu: () => void
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="header">
      {React.createElement(
        props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'trigger',
          onClick: props.toggleSideMenu
        }
      )}
    </div>
  )
}

export default Header
