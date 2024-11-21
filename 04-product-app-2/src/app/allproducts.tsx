import React from 'react'
import Product from './product';

export default function AllProducts({ productsList }: { productsList: ProductItemType[] }) {
  return (
    <>
      <div>AllProducts</div>
      <table style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '4px', margin: '2px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '6px', margin: '2px' }}>Sr.No</th>
            <th style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '6px', margin: '2px' }}>Name</th>
            <th style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '6px', margin: '2px' }}>Price</th>
            <th style={{ border: '1px solid black', boxShadow: '1px 1px 1px', padding: '6px', margin: '2px' }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            productsList.map(({ id, name, price, category }, i) => (
              <Product
                key={i + name}
                id={id}
                name={name}
                price={price}
                category={category}
              />
            ))
          }
        </tbody>
      </table>

    </>
  )
}
