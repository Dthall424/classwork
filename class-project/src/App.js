import React, {
  Component
} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Content from './Content'
import CSS from './App.css'

// This creates the main Navigation bar acrost the top of the page.

const Navbar = (props) => {
  return (
    <BrowserRouter>
    <div id='sticky'>
    <ul id='navigation'>
      <li><Link to={`/Home`} className="navItems">Home</Link></li>
      <li><Link to={`/About`} className="navItems">About</Link></li>
      <li><Link to={`/Contact`} className="navItems">Contact</Link></li>
    </ul>
      <Heading />
      <Route exact path='/' component={Content} />
      <Route path='/Home' component={Content} />
      <Route path='/Contact' component={Contact} />
      <Route path='/About' component={About} />
    </div>
    </BrowserRouter>
  );
}

// This creates the "My github Repositories" header under the "navbar"

const Heading = (props) => {
  return (
    <h2 id='mainHeading'>
      My GitHub Repositories
    </h2>
  );
}

// Creates the contact form component, to be used as a route.

const Contact = (props) => {
  return (
    <
      div id = "sWrapper" >
      <
      h2 > Send me your information! < /h2> <
      input type = "text"
      id = "name"
      name = "user_name"
      placeholder = "Full Name" / > < br / >
      <
      input type = "date"
      id = "date"
      name = "date"
      placeholder = "Date" / > < br / >
      <
      input type = "email"
      id = "email"
      name = "email"
      placeholder = "Email Address" / > < br / >
      <
      input type = "number"
      id = "phone"
      name = "phone"
      placeholder = "Phone Number (optional)" / > < br / >
      <
      button type = "submit"
      id = "submit" > Submit < /button> < /
      div >
  );
}

// This will eventually become a description of how I became a developer.

const About = (props) => {
  return (
    <div className='aboutWrap'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit risus id auctor laoreet. Etiam aliquam justo id tortor condimentum, quis egestas justo condimentum. Phasellus eu massa ut sem faucibus egestas nec nec sem. In euismod nec sapien pharetra scelerisque. Aenean finibus sem quis aliquet sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut lacus dolor. Nulla lorem augue, pellentesque non lorem a, rutrum vulputate nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed leo lectus, fermentum ut augue ac, finibus pretium neque. Integer fermentum velit nisl, eu vulputate lectus interdum nec.</p>
    </div>
  );
}

// This renders all the described elements within "Navbar" in the DOM.

ReactDOM.render(
  <Navbar />,
  document.getElementById('root')
);

export default Navbar
