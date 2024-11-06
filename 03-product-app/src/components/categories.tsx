import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

type categoryType = {
  categories: string[],
  setSelectCat: (cat: string) => void,
}



export default function Categories({ categories, setSelectCat }: categoryType) {
  const click = () => {
    console.log(setSelectCat)
  }
  return (
    <>
      <Flex justify="center" align="center" gap={1} mb={0}>
        {
          categories.map((category, i) => (

            <Button
              key={category + i}
              onClick={() => { setSelectCat(category) }}
            >
              {category}
            </Button>
          ))
        }
      </Flex>
    </>
  )
}
