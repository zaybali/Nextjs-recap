import { Flex, Table } from "@chakra-ui/react"

export default function MyInfo() {
  return (
    <>
      <Table.Root size="lg" width="50%">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>01</Table.ColumnHeader>
            <Table.ColumnHeader>Zaib Ali</Table.ColumnHeader>
            <Table.ColumnHeader>Karachi</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
      </Table.Root>
    </>
  )
}
