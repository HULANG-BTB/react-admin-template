import { Button, Form, Input, Pagination, Table } from 'antd'
import React, { useState } from 'react'
import Auth from '../../../components/Auth'
import CardLayout from '../../../layout/CardLayout'
import { columns, data } from '../data'
import './index.scss'

const CardLayoutExample: React.FC = () => {
  const [form] = Form.useForm()

  const [tableHeight, setTableHeight] = useState(0)

  const onFinish = (values: any) => {
    console.log('Finish:', values)
  }

  return (
    <CardLayout
      headerBar={'标题'}
      toolBar={
        <Auth as={Button} type="primary">
          新增
        </Auth>
      }
      searchBar={
        <Form form={form} onFinish={onFinish} layout="inline">
          <Form.Item
            name="searchField1"
            label="条件1"
            rules={[{ required: true, message: '条件1不能为空' }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="searchField2" label="条件2">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="searchField3" label="条件3">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="searchField4" label="条件4">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="searchField5" label="条件5">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item shouldUpdate>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button type="default" htmlType="reset">
              重置
            </Button>
          </Form.Item>
        </Form>
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
      pagination={<Pagination defaultCurrent={6} total={500} />}
      resize={setTableHeight}
    ></CardLayout>
  )
}

export default CardLayoutExample
