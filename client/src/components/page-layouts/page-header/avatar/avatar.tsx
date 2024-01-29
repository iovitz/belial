import {
  Avatar,
  Button,
  Input,
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

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

export default function UserAvatar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  // const title = {
  //   login: 'Login To Your Account',
  //   register: 'Create Your Account',
  // }
  function handleAvatarClick() {
    setIsLoginModalOpen(true)
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false)
  }

  return (
    <>
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>注册</ModalHeader>
          <ModalCloseButton />
          <ModalBody>content</ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCloseLoginModal}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Avatar icon={<BiUser />} onClick={handleAvatarClick} />
    </>
  )
}
