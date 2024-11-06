import { productItemType } from '@/app/productType'
import { Table } from '@chakra-ui/react'
import React from 'react'

export default function Product({
  id,
  name,
  price,
  category
}: productItemType) {
  return (
    <>
      <Table.Body>
        <Table.Row>
          <Table.ColumnHeader>{id}</Table.ColumnHeader>
          <Table.ColumnHeader>{name}</Table.ColumnHeader>
          <Table.ColumnHeader>{price}</Table.ColumnHeader>
          <Table.ColumnHeader>{category}</Table.ColumnHeader>
        </Table.Row>
      </Table.Body>

    </>
  )
}
