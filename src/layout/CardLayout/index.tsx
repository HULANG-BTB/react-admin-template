import React, { useEffect } from 'react'
import debounce from 'lodash/debounce'
import './index.scss'

export interface CardLayoutProps {
  title?: React.ReactNode
  toolbar?: React.ReactNode
  searchBar?: React.ReactNode
  resize?: (height: number) => void
}

const CardLayout: React.FC<CardLayoutProps> = (props) => {
  const { title, toolbar, searchBar, children, resize } = props

  let root: HTMLDivElement | null = null

  const handleRootElementResize = debounce(() => {
    let height = root?.querySelector('.card-layout-content')?.clientHeight ?? 0
    height -= root?.querySelector('.search-bar')?.clientHeight ?? 0
    resize?.(height)
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
    <div ref={(ref) => (root = ref)} className="card-layout">
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
          <div className="card-layout-content">
            {searchBar ? <div className="search-bar">{searchBar}</div> : null}
            <div className="table">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardLayout
