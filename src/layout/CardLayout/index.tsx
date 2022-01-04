import React, { useEffect } from 'react'
import debounce from 'lodash/debounce'
import '../index.scss'
import { GridLayoutProps } from '../GridLayout'

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
    children,
    resize
  } = props

  let root: HTMLDivElement | null = null

  const handleRootElementResize = debounce(() => {
    let height = root?.querySelector('.card-layout-content')?.clientHeight ?? 0
    height -= root?.querySelector('.search-bar')?.clientHeight ?? 0
    // resize?.(height)
    // console.log(123);
  }, 100)

  useEffect(() => {
    if (root) {
      window.addEventListener('resize', handleRootElementResize)
    }
    return () => {
      window.removeEventListener('resize', handleRootElementResize)
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
        {children}
      </div>
    </div>
  )
}

export default CardLayout
