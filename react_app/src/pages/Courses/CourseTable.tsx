import { Button, Table, Tag } from 'antd'
import React, { useMemo } from 'react'
import { courseStatusColors } from '~/constants/course'
import { numberToCurrency } from '~/utils/number'
import { stripedHtml } from '~/utils/string'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import EditCourseButton from '~/components/EditCourseButton'
import DeleteCourseButton from '~/components/DeleteCourseButton'

type Props = {
  courses: Course[]
  className?: string
  loading?: boolean
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Lessons',
    dataIndex: 'lessons',
    key: 'lessons'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions'
  }
]

const CourseTable: React.FC<Props> = (props) => {
  const { courses, ...rest } = props
  const dataSource = useMemo(() => {
    return courses.map((course) => ({
      id: course.id,
      name: <div className='whitespace-nowrap'>{course.name}</div>,
      description: <div className='line-clamp-2'>{stripedHtml(course.description)}</div>,
      price: course.price && numberToCurrency(course.price),
      level: course.level,
      status: (
        <Tag color={courseStatusColors[course.status]} className='capitalize'>
          {course.status}
        </Tag>
      ),
      key: course.id,
      lessons: course.lessonsToComplete,
      actions: <CourseActions course={course} />
    }))
  }, [courses])

  return <Table bordered {...rest} columns={columns} dataSource={dataSource} />
}

export default CourseTable

type ActionsProps = {
  course: Course
}

const CourseActions: React.FC<ActionsProps> = (props) => {
  const { course } = props

  return (
    <Button.Group>
      <EditCourseButton type='dashed' icon={<EditOutlined />} course={course} />
      <DeleteCourseButton type='dashed' icon={<DeleteOutlined />} danger course={course} />
    </Button.Group>
  )
}
