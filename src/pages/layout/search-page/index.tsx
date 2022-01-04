import { Button, Form, Input, Table } from 'antd'
import React from 'react'
import Auth from '../../../components/Auth'
import GridLayout from '../../../layout/GridLayout'

const SearchPage: React.FC = (props) => {
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
          scroll={{ y: 400 }}
        />
      }
    />
  )
}

export default SearchPage
