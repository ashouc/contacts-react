const React = require('react');

const Header = (props) => {
  return (
    <header>
      <h1>My contacts</h1>
      <h2>All <span>{props.length}</span> contacts</h2>
    </header>
  )
}

module.exports = Header;
