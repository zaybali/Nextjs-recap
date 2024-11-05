import { Table } from '@chakra-ui/react'
import React from 'react'
import Product from './product'

export default function AllProducts() {
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

      <Product />

    </Table.Root>
  )
}
