import { Table, TableProps, Tag } from 'antd'
import React, { useMemo } from 'react'
import { courseStatusColors } from '~/constants/course'
import { numberToCurrency } from '~/utils/number'
import { stripedHtml } from '~/utils/string'

type Props = {
  courses: Course[]
  className?: string
  loading?: boolean
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Lessons',
    dataIndex: 'lessons',
    key: 'lessons',
  },
];

const CourseTable: React.FC<Props> = (props) => {
  const { courses, ...rest } = props
  const dataSource = useMemo(() => {
    return courses.map(course => ({
      id: course.id,
      name: <div className='whitespace-nowrap'>{course.name}</div>,
      description: (
        <div
          className='line-clamp-2'
        >
          {stripedHtml(course.description)}
        </div>
      ),
      price: course.price && numberToCurrency(course.price),
      level: course.level,
      status: (
        <Tag
          color={courseStatusColors[course.status]}
          className='capitalize'
        >
          {course.status}
        </Tag>
      ),
      key: course.id,
      lessons: course.lessonsToComplete,
    }))
  }, [courses])

  return (
    <Table
      bordered
      {...rest}
      columns={columns}
      dataSource={dataSource}
    />
  )
}

export default CourseTable