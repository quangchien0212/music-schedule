import { ThemeProvider } from '@mui/material'
import React from 'react'
import { createBrandingLightTheme } from './theme'

export function withMui<T extends JSX.IntrinsicAttributes = any>(Component: React.ComponentType<T>) {
  const ComponentWithMui = (props: T) => {
    const theme = createBrandingLightTheme()

    return (
      <ThemeProvider theme={theme}>
        <Component {...(props as T)} />
      </ThemeProvider>
    )
  }

  return ComponentWithMui
}
