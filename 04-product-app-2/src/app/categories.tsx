import React from 'react'

type categoriesType = {
  categories: string[]
  setSelectCat: (category: string) => void
}

export default function Categories({ categories, setSelectCat }: categoriesType) {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
        {
          categories.map((category, i) => (
            <button style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '4px', margin: '2px' }} key={category + i} onClick={() => setSelectCat(category)}>{category}</button>
          ))
        }
      </div>
    </>

  )
}
