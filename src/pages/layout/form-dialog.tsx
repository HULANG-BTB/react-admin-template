import { Checkbox, Form, Input } from 'antd'
import React, { useState } from 'react'
import Dialog, { DialogMode, DialogProps } from '../../components/Dialog'

const FormDialog: React.FC = (props) => {
  const [dialog, setDialog] = useState<DialogProps['dialog']>({
    mode: DialogMode.ADD,
    show: false,
    data: null
  })

  return (
    <Dialog dialog={dialog}>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
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
    </Dialog>
  )
}

export default FormDialog
