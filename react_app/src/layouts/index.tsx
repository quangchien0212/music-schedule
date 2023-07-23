import React, { useCallback } from 'react'
import { MenuDataItem, PageContainer, PageHeader, ProLayout, ProLayoutProps } from '@ant-design/pro-components'
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

  const menuItemRender = useCallback((item: MenuDataItem , dom: React.ReactNode) => {
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
  }, [])

  return (
    <ProLayout
      route={route}
      title='Music schedule'
      location={{ pathname: location.pathname }}
      pure={false}
      menuItemRender={menuItemRender}
      {...rest}
    >
      <PageContainer>
        <PageHeader />
        {children}
      </PageContainer>
    </ProLayout>
  )
}

export default Defaultlayout
