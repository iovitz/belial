import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  const videoList = new Array(30).fill(1)
  return (
    <SimpleGrid columns={4} spacingX='15px' spacingY='15px'>
      {videoList.map((_, i) => (
        <Card maxW='md' key={i}>
          <Image
            objectFit='cover'
            src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Chakra UI'
          />

          <CardFooter justify='space-between' flexWrap='wrap'>
            <Box w={'100%'}>
              <Heading size='md' mb={'1em'} className='text-elipsis' w={'100%'}>
                Segun Adebayoawe发哇嘎哇嘎额外噶我饿给
              </Heading>
              <Box>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' w={'100%'}>
                  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                  <Box flex={1} w={0}>
                    <Heading className='text-elipsis' w={'100%'} size='sm'>
                      Segun AdebayoAdebayoAdebayoAdebayoAdebayoAdebayo
                    </Heading>
                    <Text className='text-elipsis' fontSize={'xs'}>
                      With ChakraChakraChakraChakraChakraChakra UI,
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}
