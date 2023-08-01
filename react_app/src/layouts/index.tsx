import React from 'react'
import { Box } from '@mui/material'
import SideNavigation from '~/components/SignInForm/SideNavigation'

type Props = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const Defaultlayout: React.FC<Props> = (props) => {
  const { children, ...rest } = props

  return (
    <Box sx={{ display: 'flex' }}>
      <SideNavigation />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }} {...rest}>
        {children}
      </Box>
    </Box>
  )
}

export default Defaultlayout
