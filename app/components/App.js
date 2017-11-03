const React = require('react');
const ContactList = require('./ContactList');
const Header = require('./Header');
const Search = require('./Search');
const AddContact = require('./AddContact');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Last Name',
      nameSearch: "",
      contacts : []
    }
    var contacts = [];
    this.getBasicInfo = () => {
      let url = 'http://dev.alexshoucri.com:8888/contacts/';
      axios.get(url, {
        params:{}
      })
      .then((resp) => {
        contacts = resp.data.contacts;
        this.sortContacts("first", contacts);
        this.setState({contacts: contacts});
      });
    }
    this.filterContacts = (name) => {
      if( !name ) {
        this.setState({contacts: contacts});
        return;
      }
      let filterNames = contacts.filter(function(contact) {
        if( contact.name.first.toLowerCase().indexOf(name.toLowerCase()) !== -1 || contact.name.last.toLowerCase().indexOf(name.toLowerCase()) !== -1 ) {
          return contact;
        }
      })
      this.setState({contacts: filterNames});
    }
    this.searchName = (query) => {
      if( !query ) {
        this.setState({nameSearch: ""});
        return;
      }
      this.setState({nameSearch: query});
      return
    }
    this.sortContacts = (sortIndicator, contacts) => {
      let nameA;
      let nameB;
      // By first name
      if (sortIndicator === "first") {
        contacts.sort(function(a, b) {
          nameA = a.name.first.toUpperCase();
          nameB = b.name.first.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      // By last name
      if (sortIndicator === "last") {
        contacts.sort(function(a, b) {
          nameA = a.name.last.toUpperCase();
          nameB = b.name.last.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
    }
    this.toggleSortPreference = () => {
      if(this.state.sortBy === "Last Name") {
        this.setState({sortBy: "First Name"});
        this.sortContacts("last", contacts);
      }
      if(this.state.sortBy === "First Name") {
        this.setState({sortBy: "Last Name"});
        this.sortContacts("first", contacts);
      }
    }
    this.getBasicInfo();
  }
  render() {
    return (
      <div className='header'>
        <div className='fixed'>
          <Header length={this.state.contacts.length} />
          <AddContact
            getLatestContacts = { this.getBasicInfo }
            numberOfContacts={this.state.contacts.length} />
          <Search inputName={this.searchName} filterNames={this.filterContacts}/>
          <div className="sort-items">
            <p>Sort by <span
              onClick={this.toggleSortPreference}
              value={this.state.sortBy}>
              {this.state.sortBy}
              </span>
            </p>
          </div>
        </div>
        <div className='content'>
          <ContactList
            getLatestContacts = { this.getBasicInfo }
            contacts={this.state.contacts} />
        </div>
      </div>
    )
  }
}

module.exports = App;
