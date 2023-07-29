import {
  ProForm,
  ProFormDigit,
  ProFormProps,
  ProFormText,
} from '@ant-design/pro-components'
import { Col, Row } from 'antd'
import React from 'react'
import { LockOutlined } from '@ant-design/icons'

type Props = {
  component?: React.ElementType
} & ProFormProps

function TeacherForm<T>(props: Props & T) {
  const { component: FormComponent = ProForm, ...rest } = props
  const limitEditable = props.disabled || !!props.initialValues

  return (
    <FormComponent {...rest}>
      <ProFormText
        label='FullName'
        name='fullName'
        rules={[{ required: true, message: 'Please input full name' }]}
        disabled={limitEditable}
      />
      <Row gutter={8}>
        <Col flex='auto'>
          <ProFormText
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Please input email' }]}
            disabled={limitEditable}
          />

        </Col>
        {!limitEditable &&
          <Col>
            <ProFormText.Password
              label='Password'
              name='password'
              rules={[{ required: true, message: 'Please input your Password!' }]}
              placeholder='Password'
              fieldProps={{
                prefix: <LockOutlined className={'prefixIcon'} />
              }}
            />
          </Col>
        }
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <ProFormText
            label='Phone number'
            name='phone'
            rules={[{
              message: "The value must be a string number",
              pattern: new RegExp(/^[0-9]+$/)
            }]}
            disabled={limitEditable}
          />
        </Col>
        <Col span={12}>
          <ProFormDigit
            label='Grade'
            name='grade'
            min={1}
            max={9}
          />
        </Col>
      </Row>
    </FormComponent>
  )
}

export default TeacherForm