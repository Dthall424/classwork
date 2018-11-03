import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'

const TableExamplePadded = () => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Repository : </Table.HeaderCell>
        <Table.HeaderCell>Watchers</Table.HeaderCell>
        <Table.HeaderCell>Forks</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            repo name***
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Watchers #</Table.Cell>
        <Table.Cell singleLine>Forks # #</Table.Cell>
        <Table.Cell>
        Purpose of the Repo....maybe ReadMe files
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            Repo name***
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Watchers #</Table.Cell>
        <Table.Cell singleLine>Forks # #</Table.Cell>
        <Table.Cell>
        Purpose of Repo....Maybe ReadMe file
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExamplePadded
