import React from 'react'
import { GridLayoutProps } from '../GridLayout'
import '../index.scss'

export type TreeLayoutProps = {
  treePanel?: React.ReactNode
  treeTitle?: React.ReactNode
  treeSearch?: React.ReactNode
  treeContent?: React.ReactNode
}

export type TreeGridLayoutProps = TreeLayoutProps & GridLayoutProps

const TreeGridLayout: React.FC<TreeGridLayoutProps> = (props) => {
  const {
    treePanel,
    treeTitle,
    treeSearch,
    treeContent,
    searchBar,
    searchBarRight,
    toolBar,
    toolBarRight,
    table,
    pagination,
    children
  } = props
  return (
    <div className="tree-grid-layout">
      {treePanel || treeTitle || treeSearch || treeContent ? (
        <div className="tree-area">
          {treeTitle ? <div className="tree-title">{treeTitle}</div> : null}
          {treeSearch ? <div className="tree-search">{treeSearch}</div> : null}
          {treeContent ? (
            <div className="tree-content">{treeContent}</div>
          ) : null}
          {treePanel}
        </div>
      ) : null}
      <div className="content-area grid-layout shadow">
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
        {pagination ? <div className="pagination-bar">{pagination}</div> : null}
        {children}
      </div>
    </div>
  )
}

export default TreeGridLayout
