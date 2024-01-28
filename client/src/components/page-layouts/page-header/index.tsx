import React from 'react'
import UserAvatar from './avatar/avatar'
import { useNavigate } from 'react-router-dom'
import { Flex, Heading, Input, Wrap, WrapItem, IconButton, Center } from '@chakra-ui/react'
import { BiVideoPlus, BiBell } from 'react-icons/bi'

const PageHeader: React.FC = () => {
  const navigate = useNavigate()

  const handleGoHomePage = () => {
    navigate('/')
  }

  return (
    <>
      <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} h='100%' px='15px'>
        <Heading as='h1' size='lg'>
          {t('oil_tube')}
        </Heading>
        <Input placeholder='站内搜索' size='md' w={500} />
        <Wrap>
          <WrapItem>
            <Center h='100%'>
              <IconButton colorScheme='gray' aria-label='Search database' size={'sm'} icon={<BiVideoPlus />} />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center h='100%'>
              <IconButton colorScheme='gray' aria-label='Search database' size={'sm'} icon={<BiBell />} />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center h='100%'>
              <UserAvatar />
            </Center>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  )
}

export default PageHeader
