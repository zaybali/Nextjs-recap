import React from 'react'

type categoriesType = {
  categories: string[]
  setSelectCat: (category: string) => void
}

export default function Categories({ categories, setSelectCat }: categoriesType) {
  return (
    <>
      {
        categories.map(() => {

        })
      }

    </>

  )
}
