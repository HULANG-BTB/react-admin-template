import debounce from 'lodash/debounce'
import React, { useEffect } from 'react'
import {
  addResizeListener,
  removeResizeListener
} from '../../utils/resize-event'
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
    children,
    resize
  } = props

  let root: HTMLDivElement | null = null
  let tableHeight = 0

  const handleRootElementResize = debounce(() => {
    if (root) {
      const newHeight =
        (root.querySelector('.grid-container')?.clientHeight ?? 40) - 40
      if (tableHeight !== newHeight) {
        tableHeight = newHeight
        resize?.(tableHeight)
      }
    }
  }, 300)

  useEffect(() => {
    root && addResizeListener(root, handleRootElementResize)
    return () => {
      root && removeResizeListener(root, handleRootElementResize)
    }
  })

  useEffect(() => {
    handleRootElementResize()
  }, [])

  return (
    <div ref={(ref) => (root = ref)} className="tree-grid-layout">
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
