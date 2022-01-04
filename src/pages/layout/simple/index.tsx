import { Button, Table } from 'antd'
import React, { useState } from 'react'
import Auth from '../../../components/Auth'
import GridLayout from '../../../layout/GridLayout'
import { columns, data } from '../data'

const Simple: React.FC = () => {
  const [tableHeight, setTableHeight] = useState(0)

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
          scroll={{ y: tableHeight }}
        />
      }
      resize={setTableHeight}
    />
  )
}

export default Simple
