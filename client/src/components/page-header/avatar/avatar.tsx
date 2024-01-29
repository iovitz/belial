import {
  Avatar,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'

export default function UserAvatar() {
  const [modalOpen, setModalOpen] = useState(false)
  // const title = {
  //   login: 'Login To Your Account',
  //   register: 'Create Your Account',
  // }
  function handleOpenModal() {
    setModalOpen(true)
  }

  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>注册</ModalHeader>
          <ModalCloseButton />
          <ModalBody>content</ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCloseModal}>
              关闭
            </Button>
            <Button variant='ghost'>确认</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Avatar icon={<BiUser />} cursor={'pointer'} size={'sm'} onClick={handleOpenModal} />
    </>
  )
}
