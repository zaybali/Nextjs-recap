import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Categories() {
  return (
    <>
      <Flex justify="center" align="center" gap={1} mb={0}>
        <Button>Sort by Price</Button>
        <Button>Clothes</Button>
        <Button>Mobiles</Button>
        <Button>Cars</Button>
        <Button>Laptops</Button>
        <Button>Gadgets</Button>
      </Flex>
    </>
  )
}
