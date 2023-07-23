import React from 'react'
import { Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { ProFormProps, LoginForm as MuiLoginForm, ProFormText } from '@ant-design/pro-components'

type Props = Partial<ProFormProps>

const LoginForm: React.FC<Props> = (props) => {
  return (
    <MuiLoginForm
      submitter={{
        render: (props) => (
          <Button key='submit' onClick={() => props.form?.submit?.()} block type='primary'>
            Log in
          </Button>
        )
      }}
      {...props}
    >
      <ProFormText
        name='email'
        placeholder='Email'
        rules={[{ required: true, message: 'Please input your email!' }]}
        fieldProps={{
          prefix: <UserOutlined className={'prefixIcon'} />
        }}
      />
      <ProFormText.Password
        name='password'
        rules={[{ required: true, message: 'Please input your Password!' }]}
        placeholder='Password'
        fieldProps={{
          prefix: <LockOutlined className={'prefixIcon'} />
        }}
      />
    </MuiLoginForm>
  )
}

export default LoginForm
