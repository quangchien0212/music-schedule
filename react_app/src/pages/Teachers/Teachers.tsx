import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_TEACHERS } from '~/gql/queries/teacher'
import Defaultlayout from '~/layouts/index'
import TeacherTable from './TeacherTable'

const Teachers: React.FC = () => {
  const { data, loading } = useQuery(GET_TEACHERS)
  const teachers: Teacher[] = data?.teachers ?? []

  return (
    <Defaultlayout>
      <TeacherTable
        teachers={teachers}
        className="mt-4"
        loading={loading}
      />
    </Defaultlayout>
  )
}

export default Teachers
