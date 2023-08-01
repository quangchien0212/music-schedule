import React from 'react'
import './Login.scss'
import { useMutation } from '@apollo/client'
import { LOGIN } from '~/gql/mutations/login'
import { useNavigate } from 'react-router-dom'
import SignInForm from '~/components/SignInForm'
import { SignUpFormValues } from '~/components/SignInForm/SignInForm'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [login, { loading }] = useMutation(LOGIN)

  const onSubmit = async (values: SignUpFormValues) => {
    if (loading) return

    await login({
      variables: {
        input: {
          email: values.email,
          password: values.password
        }
      },
      onCompleted: (data) => {
        const token = data.login?.token
        if (token) {
          sessionStorage.setItem('token', token)
          navigate('/')
        }
      }
    })
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <SignInForm
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
