import React from 'react'
import './index.scss'

export interface CardLayoutProps {
  title?: React.ReactNode
  toolbar?: React.ReactNode
}

const CardLayout: React.FC<CardLayoutProps> = (props) => {
  const { title, toolbar, children } = props
  return (
    <div className="card-layout">
      {toolbar || title ? (
        <div className="card-layout-header">
          {title ? <div className="card-layout-title">{title}</div> : null}
          {toolbar ? (
            <div className="card-layout-toolbar">{toolbar}</div>
          ) : null}
        </div>
      ) : null}
      <div className="card-layout-content-container">
        <div className="card-layout-content-wrapper">
          <div className="card-layout-content">{children}</div>
        </div>
      </div>
    </div>
  )
  // return (
  //   <Card className="card-layout" title={title} extra={toolbar}>
  //     {children}
  //   </Card>
  // )
}

export default CardLayout
