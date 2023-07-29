import { Tabs, TabsProps } from 'antd'
import React, { useState } from 'react'
import TeacherForm from './TeacherForm'
import UserSelect from './UserSelect'
import { useQuery } from '@apollo/client'
import { GET_USER_FOR_TEACHER_SELECTING } from '~/gql/queries/user'

const CreateTeacherFromNewUserPanel: React.FC = (props) => {

  return (
    <TeacherForm />
  )
}

const CreateTeacherFromExistingUserPanel: React.FC = (props) => {
  const [selectedUser, setSelectedUser] = useState<User>()
  const { data, loading, refetch } =
    useQuery(GET_USER_FOR_TEACHER_SELECTING)
  const users: User[] = data?.usersCanBeTeacher?.nodes ?? []

  const onRefetch = (keyword: string | undefined) => refetch({ keyword: keyword?.trim() })

  const initData: Partial<Teacher> | undefined = selectedUser && {
    fullName: selectedUser.fullName,
    email: selectedUser.email,
    phone: selectedUser.phone,
  }

  return (
    <>
      <UserSelect
        user={selectedUser}
        users={users}
        loading={loading}
        onSelect={setSelectedUser}
        onSearch={onRefetch}
      />
      <TeacherForm
        className='mt-4'
        key={selectedUser?.id}
        initialValues={initData}
      />
    </>
  )
}

const tabItems = [
  {
    label: 'From a existing user',
    key: 'fromExistingUser',
    children: <CreateTeacherFromExistingUserPanel />
  },
  {
    label: 'From a new user',
    key: 'fromNewUser',
    children: <CreateTeacherFromNewUserPanel />
  },
]

type Props = {} & Partial<TabsProps>

const CreateTeacherContent: React.FC<Props> = (props) => {
  return (
    <Tabs items={tabItems} type='card' />
  )
}

export default CreateTeacherContent
