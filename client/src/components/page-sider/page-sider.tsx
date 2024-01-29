import React from 'react'
import { Box, Button, Flex, Icon, Wrap, WrapItem } from '@chakra-ui/react'
import { BiHomeAlt, BiHistory } from 'react-icons/bi'

const PageSider: React.FC = () => {
  const menuItems = [
    {
      icon: BiHomeAlt,
      name: '首页',
    },
    {
      icon: BiHistory,
      name: '历史记录',
    },
  ]
  return (
    <Box userSelect={'none'}>
      {menuItems.map(({ icon, name }) => (
        <Box padding={'5px'} key={name}>
          <Flex
            w='100%'
            cursor={'pointer'}
            px={'1em'}
            py={'.5em'}
            alignItems={'center'}
            _hover={{
              bg: 'gray.50',
            }}>
            <Icon as={icon} mr={'.5em'} />
            {name}
          </Flex>
        </Box>
      ))}
    </Box>
  )
}

export default PageSider
