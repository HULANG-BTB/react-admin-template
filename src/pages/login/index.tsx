import React from "react";
import {useNavigate} from 'react-router-dom'
import {Form, Input, Button} from 'antd';
import './index.scss'

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const {username, password} = values
    if (username === password) {
      navigate('/dashboard')
    }
  };

  return <div className='login-page'>
    <div className='login-box'>
      <h2 className={'title'}>登录</h2>
      <div className={'form'}>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input className={'login-input'} placeholder={'Username'}/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password className={'login-input'} placeholder={'Password'}/>
          </Form.Item>

          <Form.Item>
            <Button className={'login-button'} block type="default" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
}

export default Login
