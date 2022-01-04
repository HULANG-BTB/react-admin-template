import React, { useEffect } from 'react'
import debounce from 'lodash/debounce'
import '../index.scss'
import { GridLayoutProps } from '../GridLayout'
import {
  addResizeListener,
  removeResizeListener
} from '../../utils/resize-event'

export interface CardLayoutProps extends GridLayoutProps {
  headerBar?: React.ReactNode
  headerBarRight?: React.ReactNode
}

const CardLayout: React.FC<CardLayoutProps> = (props) => {
  const {
    headerBar,
    headerBarRight,
    toolBar,
    toolBarRight,
    searchBar,
    searchBarRight,
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
    <div ref={(ref) => (root = ref)} className="card-layout shadow">
      {headerBar || headerBarRight ? (
        <div className={`header-bar ${headerBarRight ? 'flex-between' : ''}`}>
          <div className="header-bar-left">{headerBar}</div>
          {headerBarRight ? (
            <div className="header-bar-right">{headerBarRight}</div>
          ) : null}
        </div>
      ) : null}

      <div className="content-area">
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

export default CardLayout
