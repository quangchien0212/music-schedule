import { Menu, MenuProps, theme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { DashboardOutlined } from '@ant-design/icons'

const menuItems: MenuProps['items'] = [
  {
    icon: <DashboardOutlined />,
    key: 'dashboard',
    label: 'Dashboard'
  }
]

type Props = {} & React.HTMLAttributes<HTMLDivElement>

const Sidebar: React.FC<Props> = (props) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Sider style={{ background: colorBgContainer }} width={250} {...props}>
      <Menu mode='inline' style={{ height: '100%' }} items={menuItems} />
    </Sider>
  )
}

export default Sidebar
