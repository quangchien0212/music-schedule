import clsx from 'clsx'
import React from 'react'

const FormErrorText: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const { className, ...rest } = props

  return (
    <p
      className={clsx(
        "mt-2 text-sm text-red-600 dark:text-red-500",
        className
      )}
      {...rest}
    />
  )
}

export default FormErrorText