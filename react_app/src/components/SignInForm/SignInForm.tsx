import { Button, CircularProgress, FormControl } from '@mui/material'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import FormErrorText from './FormErrorText'
import StyledFormLabel from './StyledFormLabel'
import StyledInput from './StyledInput'

export type SignUpFormValues = {
  email: string
  password: string
}

type Props = {
  onSubmit: SubmitHandler<SignUpFormValues>
  defaultValues?: SignUpFormValues
}

const SignInForm: React.FC<Props> = (props) => {
  const { onSubmit, defaultValues } = props
  const { control, handleSubmit, formState: { isSubmitting, errors, isValid } } =
    useForm<SignUpFormValues>({
      defaultValues: defaultValues ?? {
        email: '',
        password: '',
      },
    })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 md:space-y-6'
    >
      <FormControl error={!!errors.email}>
        <StyledFormLabel htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
          Your email
        </StyledFormLabel>
        <Controller
          name='email'
          control={control}
          rules={{ required: 'Please input your email!' }}
          render={({ field }) => (
            <StyledInput
              {...field}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ark'
              placeholder='example@gmail.com'
            />
          )}
        />
        {errors.email?.message &&
          <FormErrorText>
            {errors.email.message}
          </FormErrorText>
        }
      </FormControl>
      <FormControl error={!!errors.password}>
        <StyledFormLabel className='block mb-2 text-sm font-medium text-gray-900'>Password</StyledFormLabel>
        <Controller
          name='password'
          control={control}
          rules={{ required: 'Please input your Password!' }}
          render={({ field }) => (
            <StyledInput
              {...field}
              type='password'
              placeholder='••••••••'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
            />
          )}
        />
        {errors.password?.message &&
          <FormErrorText>
            {errors.password.message}
          </FormErrorText>
        }
      </FormControl>
      <Button
        type='submit'
        className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50'
        startIcon={isSubmitting && <CircularProgress size={15} color='secondary' />}
        disabled={isSubmitting}
      >
        Sign in
      </Button>
      <p className='text-sm font-light text-gray-500 '>
        Don’t have an account yet?{' '}
        <a href='#' className='font-medium text-primary-600 hover:underline'>
          Sign up
        </a>
      </p>
    </form>
  )
}

export default SignInForm
