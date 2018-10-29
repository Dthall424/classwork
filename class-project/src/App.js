import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import Content from './Content'
import CSS from './App.css'

const Navbar = (props) => {
  return (
    <div id='sticky'>
      <ul id='navigation'>
        <li><a href="..\HTML\Navlink.html" className="navItems">Home</a></li>
        <li><a href="..\HTML\Navlink.html" className="navItems">About</a></li>
        <li><a href="..\HTML\Navlink.html" className="navItems">Contact</a></li>
      </ul>
      <Heading />
      <Content />
    </div>
  );
}

const Heading = (props) => {
  return (
    <h2 id='mainHeading'>
      My GitHub Repositories
    </h2>
  );
}

ReactDOM.render(
  <Navbar />,
  document.getElementById('root')
);

export default Navbar
