import React, {
  Component
} from 'react';
import { Header, Table, Rating } from 'semantic-ui-react';

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
      <div id='myTable'>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Repository : </Table.HeaderCell>
              <Table.HeaderCell>Watchers : </Table.HeaderCell>
              <Table.HeaderCell>Forks : </Table.HeaderCell>
              <Table.HeaderCell>Language : </Table.HeaderCell>
              <Table.HeaderCell>Open Issues : </Table.HeaderCell>
              <Table.HeaderCell>Description : </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          <React.Fragment>
           { repos.map(repo =>
            <Table.Row>
            <React.Fragment>
              <Table.Cell>
                <Header as='h2' textAlign='center'>
                  <a href={repo.html_url}>{repo.name}</a>
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>{
                  repo.watchers
             }</Table.Cell>
              <Table.Cell singleLine>{
               repo.forks
              }</Table.Cell>
              <Table.Cell singleLine>{
               repo.language
              }</Table.Cell>
              <Table.Cell singleLine>{
               repo.open_issues
              }</Table.Cell>
              <Table.Cell singleLine>{
               repo.description
              }</Table.Cell>
              </React.Fragment>
            </Table.Row>
          )
          }
          </React.Fragment>
          </Table.Body>
        </Table>
        </div>
      )
}
}




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



export default Content
