import React from 'react'

export default function Product({ id, name, price, category }: ProductItemType) {
  return (
    <tr>
      <td style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '6px', margin: '2px' }}>{id}</td>
      <td style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '6px', margin: '2px' }}>{name}</td>
      <td style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '6px', margin: '2px' }}>{price}</td>
      <td style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '6px', margin: '2px' }}>{category}</td>
    </tr>
  )
}
