import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_TEACHERS } from '~/gql/queries/teacher'
import Defaultlayout from '~/layouts/index'
import TeacherTable from './TeacherTable'
import CreateTeacherButton from '~/components/CreateCourseButton/CreateTeacherButton'

const Teachers: React.FC = () => {
  const { data, loading } = useQuery(GET_TEACHERS)
  const teachers: Teacher[] = data?.teachers ?? []

  return (
    <Defaultlayout>
      <CreateTeacherButton />
      <TeacherTable
        teachers={teachers}
        className="mt-4"
        loading={loading}
      />
    </Defaultlayout>
  )
}

export default Teachers
