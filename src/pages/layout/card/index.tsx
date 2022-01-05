import { Button, Checkbox, Form, Input, Modal, Pagination, Table } from 'antd'
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

  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleOk = () => {
    //
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <CardLayout
      headerBar={'标题'}
      toolBar={
        <Auth
          as={Button}
          type="primary"
          onClick={() => setIsModalVisible(true)}
        >
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
    >
      <Modal
        title="新增"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
        centered
      >
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </CardLayout>
  )
}

export default CardLayoutExample
