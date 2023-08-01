import { useFormControl } from '@mui/material'
import clsx from 'clsx'
import React from 'react'

type Props = {} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const StyledInput: React.FC<Props> = ({ className, ...props }) => {
  const formControl = useFormControl()
  const isError = formControl?.error

  return (
    <input
      {...props}
      className={clsx(
        className,
        isError && 'border-red-500 text-red-900',
      )}
    />
  )
}

export default StyledInput