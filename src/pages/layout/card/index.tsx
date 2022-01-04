import { Button, Form, Input, Table } from 'antd'
import React, { useState } from 'react'
import Auth from '../../../components/Auth'
import CardLayout from '../../../layout/CardLayout'
import './index.scss'

const CardLayoutExample: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    }
  ]

  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`
    })
  }

  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Finish:', values)
  }

  const [scroll, setScroll] = useState(0)

  const resize = (height: number) => {
    console.log(height)

    setScroll(height - 96)
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
      resize={resize}
      table={
        <Table
          size="small"
          bordered
          columns={columns}
          dataSource={data}
          scroll={{ y: scroll }}
        />
      }
    ></CardLayout>
  )
}

export default CardLayoutExample
