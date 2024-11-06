import { Table } from '@chakra-ui/react'
import React from 'react'
import Product from './product'
import { productItemType } from '@/app/productType'

type productListType = {
  productsList: productItemType[]
}

export default function AllProducts({ productsList }:productListType) {
  console.log(productsList);
  return (
    <Table.Root size="lg" width="50%">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Sr.</Table.ColumnHeader>
          <Table.ColumnHeader>Product</Table.ColumnHeader>
          <Table.ColumnHeader>Price</Table.ColumnHeader>
          <Table.ColumnHeader>Category</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>

      {}
      <Product />

    </Table.Root>
  )
}
