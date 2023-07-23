import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import React from 'react'
import CourseForm from '../CourseForm'
import { ModalForm, ModalFormProps } from '@ant-design/pro-components'
import { gql, useMutation } from '@apollo/client'
import { CREATE_COURSE } from '~/gql/mutations/course'

type Props = {} & Partial<ButtonProps>

const CreateCourseButton: React.FC<Props> = (props) => {
  const { children, ...rest } = props
  const [createCourse, { loading }] = useMutation<CreateCourseData, CreateCourseVars>(CREATE_COURSE, {
    update: (cache, result) => {
      if (result.data?.createCourse?.success) {
        const course = result.data.createCourse.course
        cache.modify({
          fields: {
            courses(refs = []) {
              const newRef = cache.writeFragment({
                data: course,
                fragment: gql`
                  fragment NewCourse on Course {
                    id
                  }
                `
              })
              return [...refs, newRef]
            }
          }
        })
      }
    }
  })

  const onFormFinish = async (formData: CourseAttributes) => {
    createCourse({
      variables: {
        input: {
          attributes: {
            ...formData
          }
        }
      }
    })
  }

  return (
    <CourseForm<ModalFormProps>
      component={ModalForm}
      modalProps={{
        width: 500,
        title: 'Create new course',
        destroyOnClose: true
      }}
      trigger={
        <Button type='primary' {...rest}>
          {children ?? 'Create course'}
        </Button>
      }
      loading={loading}
      onFinish={onFormFinish}
    />
  )
}

export default CreateCourseButton
