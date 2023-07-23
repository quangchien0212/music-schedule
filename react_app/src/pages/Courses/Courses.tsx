import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_COURSES } from '~/gql/queries/course'
import Defaultlayout from '~/layouts/index'
import CourseTable from './CourseTable'
import CreateCourseButton from '~/components/CreateCourseButton'

const Courses: React.FC = () => {
  const { data, loading } = useQuery(GET_COURSES)
  const courses: Course[] = data?.courses ?? []

  return (
    <Defaultlayout>
      <CreateCourseButton />
      <CourseTable courses={courses} loading={loading} className='mt-4' />
    </Defaultlayout>
  )
}

export default Courses
