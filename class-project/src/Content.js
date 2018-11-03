import React, {
  Component
} from 'react';
import { Header, Table, Rating } from 'semantic-ui-react'

// Creating the "content" component that contains most of the page info.

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

// Fetching information from the github API were using.

  async componentDidMount() {
    const res = await fetch('https://api.github.com/users/Dthall424/repos')
    const json = await res.json()
    this.setState({
      repos: json
    })
    console.log(json)
    console.log(this.state.repos.length)
  }

  render() {
    const {
      repos
    } = this.state
    console.log(repos)
    return (
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Repository : </Table.HeaderCell>
              <Table.HeaderCell>Watchers</Table.HeaderCell>
              <Table.HeaderCell>Forks</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          { repos.map(repo =>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h2' textAlign='center'>
                  <a href={repo.html_url}>{repo.name}</a>
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

    //   <
    //     div id = 'listWrap' >
    //     <
    //     ul id = 'myList' > {
    //       repos.map(repo =>
    //         <
    //         li className = 'myListItems' >  Repository:
    //         <
    //         a href = {
    //           repo.html_url
    //         } > {
    //           repo.name
    //         } <
    //         /a><span id='watchers'>Watchers : {
    //         repo.watchers
    //       } < /span> <
    //       span id = 'forks' > Forks: {
    //         repo.forks
    //       } < /span> < /
    //       li >
    //     )
    //   } <
    //   /ul> < /
    // div >
  )
}
}

export default Content
