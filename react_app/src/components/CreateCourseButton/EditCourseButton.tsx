import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import React from 'react'
import CourseForm from '../CourseForm'
import { ModalForm, ModalFormProps } from '@ant-design/pro-components'
import { useMutation } from '@apollo/client'
import { UPDATE_COURSE } from '~/gql/mutations/course'

type Props = {
  course: Course
} & Partial<ButtonProps>

const EditCourseButton: React.FC<Props> = (props) => {
  const { course, ...rest } = props

  const initData = {
    name: course.name,
    description: course.description,
    status: course.status,
    level: course.level,
    price: course.price,
    lessonsToComplete: course.lessonsToComplete
  }

  const [createCourse, { loading }] = useMutation<UpdateCourseData, UpdateCourseVars>(UPDATE_COURSE)

  const onFormFinish = async (formData: CourseAttributes) => {
    await createCourse({
      variables: {
        input: {
          id: course.id,
          attributes: {
            ...formData
          }
        }
      }
    })

    return true
  }

  return (
    <CourseForm<ModalFormProps>
      component={ModalForm}
      modalProps={{
        width: 500,
        title: 'Create new course',
        destroyOnClose: true
      }}
      trigger={<Button {...rest} />}
      loading={loading}
      onFinish={onFormFinish}
      initialValues={initData}
    />
  )
}

export default EditCourseButton
