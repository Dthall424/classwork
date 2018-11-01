import React, {
  Component
} from 'react';


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

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
    return ( <
        div id = 'listWrap' >
        <
        ul id = 'myList' > {
          repos.map(repo =>
            <
            li className = 'myListItems' >  Repository:
            <
            a href = {
              repo.html_url
            } > {
              repo.name
            } <
            /a><span id='watchers'>Watchers : {
            repo.watchers
          } < /span> <
          span id = 'forks' > Forks: {
            repo.forks
          } < /span> < /
          li >
        )
      } <
      /ul> < /
    div >
  )
}
}

export default Content
