import React, {
  Component
} from 'react';
import {
  BrowserRouter,
  Route
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
        <li><a href="..\HTML\Navlink.html" className="navItems">Home</a></li>
        <li><a href="..\HTML\Navlink.html" className="navItems">About</a></li>
        <li><a href="..\HTML\Navlink.html" className="navItems">Contact</a></li>
      </ul>
      <Heading />
      <Route path='/HTML/Navlink.html' component={Content} />
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

// This renders all the described elements within "Navbar" in the DOM.

ReactDOM.render(
  <Navbar />,
  document.getElementById('root')
);

export default Navbar
