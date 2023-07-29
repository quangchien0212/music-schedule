import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import useDebounce from '~/lib/hooks/useDebouce'


type Option = {
  value: string
  label: string
}

type Props = {
  user?: User
  onSelect: (user: User | undefined) => void
  users: User[]
  loading?: boolean
  onSearch: (value: string | undefined) => void
}

const UserSelect: React.FC<Props> = (props) => {
  const { users, user, onSelect, onSearch, loading } = props
  const [keyword, setKeyword] = useState<string | undefined>()

  const options = users.map((user) => ({
    value: user.id,
    label: user.fullName
  }))

  const handleSelect = (value: string) => {
    const userSelected = users.find(user => user.id == value)
    onSelect(userSelected)
  }

  useDebounce(() => {
    if (keyword != user?.fullName) {
      onSearch(keyword)
    }
  }, 500, [keyword])

  useEffect(() => {
    if (keyword != user?.fullName) {
      setKeyword(user?.fullName)
    }
  }, [user?.id])

  return (
    <Select<string, Option>
      value={user?.id}
      options={options}
      style={{ width: 300 }}
      onSelect={handleSelect}
      onSearch={setKeyword}
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      loading={loading}
      searchValue={keyword}
      placeholder='Select a user'
    >
    </Select>
  )
}

export default UserSelect