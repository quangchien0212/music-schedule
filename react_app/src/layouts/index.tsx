import React from 'react'
import { ProLayout, ProLayoutProps } from '@ant-design/pro-components'
import { DashboardOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

const route = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      icon: <DashboardOutlined />,
    },
    {
      path: '/courses',
      name: 'Courses',
      icon: <AppstoreOutlined />,
    },
  ]
}

type Props = {
  children: React.ReactNode
} & ProLayoutProps

const Defaultlayout: React.FC<Props> = (props) => {
  const { children, ...rest } = props
  const location = useLocation()

  return (
    <ProLayout
      route={route}
      title='Music schedule'
      location={{pathname: location.pathname}}
      pure={false}
      menuItemRender={(item, dom) => {
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {item.path ?
              <Link to={item.path}>
                {dom}
              </Link>
              :
              dom
            }
          </div>
        )
      }}
      {...rest}
    >
      {children}
    </ProLayout>
  )
}

export default Defaultlayout
