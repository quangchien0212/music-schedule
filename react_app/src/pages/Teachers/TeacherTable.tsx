import { Button, Table, Tag } from 'antd'
import React, { useMemo } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'Full name',
    dataIndex: 'fullName',
    key: 'fullName'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade'
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions'
  }
]

type Props = {
  teachers: Teacher[]
  className?: string
  loading?: boolean
}

const TeacherTable: React.FC<Props> = (props) => {
  const { teachers, ...rest } = props
  const dataSource = useMemo(() => {
    return teachers.map((teacher) => ({
      key: teacher.id,
      fullName: teacher.fullName,
      email: teacher.email,
      grade: (
        <Tag color='blue' className='capitalize'>
          {teacher.grade}
        </Tag>
      ),
      phone: teacher.phone,
      actions: <Actions teacher={teacher} />,
    }))
  }, [teachers])

  return (
    <Table
      bordered
      {...rest}
      columns={columns}
      dataSource={dataSource}
    />
  )
}

export default TeacherTable

type ActionsProps = {
  teacher: Teacher
}

const Actions: React.FC<ActionsProps> = () => {

  return (
    <Button.Group>
      <Button type='dashed' icon={<EditOutlined />} />
      <Button type='dashed' icon={<DeleteOutlined />} danger />
    </Button.Group>
  )
}