import { Button, Table } from 'antd'
import React from 'react'
import Auth from '../../../components/Auth'
import GridLayout from '../../../layout/GridLayout'
import { columns, data } from '../data'

const Simple: React.FC = () => {
  return (
    <GridLayout
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
          pagination={false}
          scroll={{ y: 400 }}
        />
      }
    />
  )
}

export default Simple
