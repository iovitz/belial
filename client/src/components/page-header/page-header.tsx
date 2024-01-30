import React from 'react'
import UserAvatar from './avatar/avatar'
import { useNavigate } from 'react-router-dom'
import {
  Flex,
  Heading,
  Input,
  Wrap,
  WrapItem,
  IconButton,
  Center,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
} from '@chakra-ui/react'
import { BiVideoPlus, BiBell, BiSearchAlt } from 'react-icons/bi'
import UploadButton from './upload/upload-button'

const PageHeader: React.FC = () => {
  const navigate = useNavigate()

  const handleGoHomePage = () => {
    navigate('/')
  }

  return (
    <>
      <Flex
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        h='100%'
        px='15px'
        borderBottom='1px'
        borderColor='gray.200'>
        <Heading as='h1' size={'md'} cursor={'pointer'}>
          {t('oil_tube')}
        </Heading>

        <InputGroup w={500}>
          <InputRightElement pointerEvents='none' h={'100%'}>
            <Icon as={BiSearchAlt} />
          </InputRightElement>
          <Input placeholder='站内搜索' size='sm' variant={'filled'} />
        </InputGroup>
        <Wrap>
          <WrapItem>
            <Center h='100%'>
              <UploadButton />
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
