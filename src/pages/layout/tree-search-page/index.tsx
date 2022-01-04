import { Button, Input, Pagination, Table, Tree } from 'antd'
import React, { useState } from 'react'
import Auth from '../../../components/Auth'
import TreeGridLayout from '../../../layout/TreeGridLayout'
import { columns, data, treeData } from '../data'

const TreeSearchPage: React.FC = (props) => {
  const [tableHeight, setTableHeight] = useState(0)

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info)
  }

  const onCheck = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info)
  }

  return (
    <TreeGridLayout
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
      toolBar={
        <Auth as={Button} type="primary">
          新增
        </Auth>
      }
      toolBarRight={
        <Auth as={Button} type="primary" danger>
          删除
        </Auth>
      }
      table={
        <Table
          size="small"
          bordered
          columns={columns}
          dataSource={data}
          scroll={{ y: tableHeight }}
          pagination={false}
        />
      }
      pagination={<Pagination defaultCurrent={6} total={500} />}
      resize={setTableHeight}
    ></TreeGridLayout>
  )
}

export default TreeSearchPage
