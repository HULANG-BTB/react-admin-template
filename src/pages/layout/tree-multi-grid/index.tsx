import { Input, Tree } from 'antd'
import React from 'react'
import TreeMultiGridLayout from '../../../layout/TreeMultiGridLayout'
import CardLayoutExample from '../card'
import { treeData } from '../data'
import SearchPage from '../search-page'
import Simple from '../simple'

const TreeMultiGrid: React.FC = (props) => {
  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info)
  }

  const onCheck = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info)
  }
  return (
    <TreeMultiGridLayout
      treeSearch={<Input placeholder="请输入关键词"></Input>}
      treeContent={
        <Tree
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={onSelect}
          onCheck={onCheck}
          treeData={treeData}
        />
      }
    >
      <CardLayoutExample />
      <CardLayoutExample />
    </TreeMultiGridLayout>
  )
}

export default TreeMultiGrid
