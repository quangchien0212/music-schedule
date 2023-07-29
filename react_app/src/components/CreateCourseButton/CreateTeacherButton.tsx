import { Button, ButtonProps, Modal } from 'antd'
import React, { useState } from 'react'
import { UsergroupAddOutlined } from '@ant-design/icons'
import CreateTeacherContent from '../CreateTeacherContent'

type Props = {} & Partial<ButtonProps>

const CreateTeacherButton: React.FC<Props> = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const { children, ...rest } = props
  const showModal = () => setModalOpen(true)
  const hideModal = () => setModalOpen(false)

  return (
    <>
      <Button
        type='primary'
        icon={<UsergroupAddOutlined />}
        {...rest}
        onClick={showModal}
      >
        {children ?? 'Add new Teacher'}
      </Button>
      <Modal
        open={modalOpen}
        width={500}
        title='Add new Teacher'
        onCancel={hideModal}
        footer={<></>}
        destroyOnClose
      >
        <CreateTeacherContent />
      </Modal>
    </>
  )
}

export default CreateTeacherButton