import { Button, Popconfirm } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import React from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_COURSE } from '~/gql/mutations/course'
import { QuestionCircleOutlined } from '@ant-design/icons'

type Props = {
  course: Course
} & Partial<ButtonProps>

const DeleteCourseButton: React.FC<Props> = (props) => {
  const { course, ...rest } = props

  const [deleteCourse] = useMutation(DELETE_COURSE, {
    update(cache, result) {
      if (result.data?.deleteCourse?.success) {
        const course = result.data?.deleteCourse?.course
        cache.evict({
          id: 'Course:'+course.id
        })
      }
    }
  })

  const onConfirm = async () => {
    await deleteCourse({
      variables: {
        input: {
          id: course.id,
        }
      }
    })

    return true
  }

  return (
    <Popconfirm
      title="Delete the course"
      description="Are you sure to delete this course?"
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      onConfirm={onConfirm}
    >
      <Button danger {...rest} />
    </Popconfirm>
  )
}

export default DeleteCourseButton
