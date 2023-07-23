import React from 'react'
import {
  ProForm,
  ProFormDigit,
  ProFormMoney,
  ProFormProps,
  ProFormSelect,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components'
import { Col, Row } from 'antd'

type Props = {
  component?: React.ElementType
} & ProFormProps

function CourseForm<T>(props: Props & T) {
  const { component: FormComponent = ProForm, ...rest } = props

  return (
    <FormComponent {...rest}>
      <ProFormText label='Name' name='name' rules={[{ required: true, message: 'Please input course name' }]} />
      <ProFormTextArea
        label='Description'
        name='description'
        rules={[{ required: true, message: 'Please input course description' }]}
      />
      <Row gutter={8}>
        <Col span={12}>
          <ProFormSelect
            name='status'
            label='Status'
            valueEnum={{
              active: 'Active'
            }}
            rules={[{ required: true, message: 'Please select course status' }]}
          />
        </Col>
        <Col span={12}>
          <ProFormSelect
            name='level'
            label='Level'
            valueEnum={{
              beginner: 'Beginner'
            }}
            rules={[{ required: true, message: 'Please select course level' }]}
          />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <ProFormDigit
            label='Lessons to complete'
            name='lessonsToComplete'
            rules={[
              {
                required: true,
                message: 'Please input lessons to complete'
              }
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormMoney label='Price' name='price' min={0} />
        </Col>
      </Row>
    </FormComponent>
  )
}

export default CourseForm
