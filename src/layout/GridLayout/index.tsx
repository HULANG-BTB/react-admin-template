import debounce from 'lodash/debounce'
import React, { useEffect } from 'react'
import {
  addResizeListener,
  removeResizeListener
} from '../../utils/resize-event'
import '../index.scss'

export interface GridLayoutProps {
  toolBar?: React.ReactNode
  toolBarRight?: React.ReactNode
  searchBar?: React.ReactNode
  searchBarRight?: React.ReactNode
  table?: React.ReactNode
  pagination?: React.ReactNode
  resize?: (height: number) => void
}

const GridLayout: React.FC<GridLayoutProps> = (props) => {
  const {
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
        (root.querySelector('.grid-container')?.clientHeight ?? 42) - 42
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
    <div ref={(ref) => (root = ref)} className="grid-layout shadow">
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
  )
}

export default GridLayout
