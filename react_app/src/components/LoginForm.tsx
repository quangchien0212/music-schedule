import React from 'react';
import { Button, Form, FormProps, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type Props = Partial<FormProps>
const LoginForm: React.FC<Props> = (props) => {

  return (
    <Form
      {...props}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" block>
          Log in
        </Button>
        <div className='mt-2'>
          Or <Link to='/register'>register now!</Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm