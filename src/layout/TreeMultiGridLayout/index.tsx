import React from 'react'
import { TreeLayoutProps } from '../TreeGridLayout'
import '../index.scss'

export type TreeMultiGridLayoutProps = TreeLayoutProps

const TreeMultiGridLayout: React.FC<TreeMultiGridLayoutProps> = (props) => {
  const { treePanel, treeTitle, treeSearch, treeContent, children } = props
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
      <div className="content-area">{children}</div>
    </div>
  )
}

export default TreeMultiGridLayout
