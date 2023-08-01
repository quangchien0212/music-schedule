import { FormLabel, FormLabelProps, useFormControl } from '@mui/material'
import clsx from 'clsx'
import React from 'react'

type Props = {} & FormLabelProps

const StyledFormLabel: React.FC<Props> = ({ className, ...props }) => {
  const formControl = useFormControl()
  const isError = props.error || formControl?.error

  return (
    <FormLabel
      {...props}
      className={clsx(
        className,
        isError && 'text-red-700',
      )}
    />
  )
}

export default StyledFormLabel