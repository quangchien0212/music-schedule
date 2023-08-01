import { CSSObject, Drawer as MuiDrawer, Theme, styled } from '@mui/material'
import clsx from 'clsx'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BarsFromLeftOutlinedIcon from '~/icons/BarsFromLeftOutlinedIcon'
import OpenBookOutlinedIcon from '~/icons/OpenBookOutlinedIcon'
import UsersOutlinedIcon from '~/icons/UsersOutlinedIcon'
import WindowRestoreOutlineIcon from '~/icons/WindowRestoreOutlineIcon'

const openedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden'
})

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

type NavLink = {
  path: string
  icon?: React.ReactNode
  label: string
  items?: NavLink[]
}

const navLinks: NavLink[] = [
  {
    path: '/home',
    icon: <WindowRestoreOutlineIcon className='text-grey-900' />,
    label: 'DashBoard'
  },
  {
    path: '/courses',
    icon: <OpenBookOutlinedIcon className='text-grey-900' />,
    label: 'Courses'
  },
  {
    path: '/teachers',
    icon: <UsersOutlinedIcon className='text-grey-900' />,
    label: 'Teachers'
  }
]

type Props = React.HTMLAttributes<HTMLDivElement>

const SideNavigation: React.FC<Props> = (props) => {
  const { ...rest } = props
  const [open, setOpen] = useState<boolean>(true)
  const toggleOpen = () => setOpen((prevOpen) => !prevOpen)

  return (
    <Drawer
      variant='permanent'
      open={open}
      anchor='left'
      hideBackdrop
      PaperProps={{
        elevation: 0
      }}
      classes={{
        paper: clsx('static border-r border-gray-200 bg-white w-full h-screen')
      }}
      className={open ? 'w-64' : 'w-16'}
      {...rest}
    >
      <DrawerHeader open={open}>
        <button
          aria-expanded='true'
          aria-controls='sidebar'
          className='p-2 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 flex align-center justify-center'
          onClick={toggleOpen}
        >
          <BarsFromLeftOutlinedIcon strokeWidth='thick' width={18} height={18} />
        </button>
      </DrawerHeader>
      <div className='overflow-y-auto py-5 px-3 h-full'>
        <ul className='space-y-2'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                className={clsx(
                  'flex items-center p-2 text-base font-medium text-gray-700 rounded-lg group hover:bg-gray-100'
                )}
                to={item.path}
              >
                <span className='flex justify-center items-center w-[18px] h-[18px]'>{item.icon}</span>
                <span className={clsx(open ? 'ml-3' : 'w-0 opacity-0')}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  )
}

export default SideNavigation

const DrawerHeader = styled(function (props: React.HTMLAttributes<HTMLDivElement> & { open: boolean }) {
  const { open, className, children, ...rest } = props

  return (
    <div
      {...rest}
      className={clsx('flex flex-wrap justify-between items-center border-b border-gray-200 p-3', className)}
    >
      <div className='flex justify-start items-center'>
        {props.children}
      </div>
    </div>
  )
})<{ open: boolean }>(({ open }) => ({}))
