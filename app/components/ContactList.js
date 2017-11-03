const React = require('react');
const Contact = require('./Contact');

const ContactList = (props) => {
  return (
    <div className='container'>
      {props.contacts.map(contact =>
        <Contact
        getLatestContacts={props.getLatestContacts}
        key={contact.id} {...contact} />)}
    </div>
  )
}

module.exports = ContactList;
