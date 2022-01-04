import React from 'react'
import '../index.scss'

export interface GridLayoutProps {
  toolBar?: React.ReactNode
  toolBarRight?: React.ReactNode
  searchBar?: React.ReactNode
  searchBarRight?: React.ReactNode
  table?: React.ReactNode
  resize?: (height: number) => void
}

const GridLayout: React.FC<GridLayoutProps> = (props) => {
  const { searchBar, searchBarRight, toolBar, toolBarRight, table, children } =
    props
  return (
    <div className="grid-layout shadow">
      {searchBar || searchBarRight ? (
        <div className={`search-bar ${searchBarRight ? 'flex-between' : ''}`}>
          <div className="search-bar-left">{searchBar}</div>
          {searchBarRight ? (
            <div className="search-bar-right">{searchBarRight}</div>
          ) : null}
        </div>
      ) : null}
      {toolBar || toolBarRight ? (
        <div className={`tool-bar ${toolBarRight ? 'flex-between' : ''}`}>
          <div className="tool-bar-left">{toolBar}</div>
          {toolBarRight ? (
            <div className="tool-bar-right">{toolBarRight}</div>
          ) : null}
        </div>
      ) : null}
      {table ? <div className="grid-container">{table}</div> : null}
      {children}
    </div>
  )
}

export default GridLayout
