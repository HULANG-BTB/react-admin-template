import { Button, Checkbox, Form, Input, Modal, Pagination, Table } from 'antd'
import { title } from 'process'
import React, { useState } from 'react'
import Auth from '../../../components/Auth'
import CardLayout from '../../../layout/CardLayout'
import { columns, data } from '../data'
import './index.scss'

const CardLayoutExample: React.FC = () => {
  const [form] = Form.useForm()

  const [modelForm] = Form.useForm()

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
  const handleAddRow = () => {
    modelForm.resetFields()
    setIsModalVisible(true)
  }

  const handleEditRow = (row: any) => {
    modelForm.setFieldsValue(row)
    modelForm

    setIsModalVisible(true)
  }
  const handleViewRow = (row: any) => {
    modelForm.setFieldsValue(row)
    setIsModalVisible(true)
  }

  return (
    <CardLayout
      headerBar={'标题'}
      toolBar={
        <Auth as={Button} type="primary" onClick={() => handleAddRow()}>
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
          dataSource={data}
          pagination={false}
          scroll={{ y: tableHeight }}
        >
          {columns.map((item) => (
            <Table.Column key={item.dataIndex} {...item} />
          ))}
          <Table.Column
            title="Action"
            key="action"
            width={120}
            align="center"
            fixed="right"
            render={(text, record) => {
              return (
                <>
                  <Auth
                    as={Button}
                    type="link"
                    onClick={() => handleEditRow(record)}
                  >
                    Edit
                  </Auth>
                  <Auth
                    as={Button}
                    type="link"
                    onClick={() => handleViewRow(record)}
                  >
                    View
                  </Auth>
                </>
              )
            }}
          />
        </Table>
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
          form={modelForm}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please input your Age!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input your Address!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </CardLayout>
  )
}

export default CardLayoutExample
