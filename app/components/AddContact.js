const React = require('react');
const FormContact = require('./FormContact');
const ContactList = require('./ContactList');


class Add extends React.Component {
  constructor(props) {
    super(props);
    let defaultPicture = "https://bit.ly/default-pic";
    this.state = {
      formShown: false,
      formType: 'add',
      counter: (this.props.numberOfContacts + 1)
    }
    this.changeFormDisplay = () => {
      this.setState({formShown: (this.state.formShown) ? false : true});
    }
    this.addHandler = () => {
      this.changeFormDisplay();

    }
    this.cancelHandler = () => {
      this.setState({formShown: (this.state.formShown) ? false : true});
    }

    this.submitHandler = (contact) => {
      let url = 'http://dev.alexshoucri.com:8888/contacts/';
      console.log(url);
      debugger;
      axios.post(url, {
        name: {
          first: contact.firstName,
          last: contact.lastName
        },
        jobTitle: contact.jobTitle,
        address: {
          address1: contact.address1,
          address2: contact.address2,
          city: contact.city,
          state: contact.province,
          zip: contact.zipcode
        },
        mobile_phone: contact.mobilePhone,
        home_phone: contact.homePhone,
        work_phone: contact.workPhone,
        email: contact.email,
        photo: contact.photo ? contact.photo : defaultPicture
      })
      .then((resp) => {
        this.setState({formShown: (this.state.formShown) ? false : true});
        this.props.getLatestContacts();
      })
    };
  }
  render() {
    return (
      <div className="add-contact">
        <p style={{
          textAlign: 'center',
          fontSize: '50px',
          fontWeight: '300'
        }}>
          <i className="fa fa-plus" aria-hidden="true"
            style={{transform: (this.state.formShown) ? 'rotateZ(45deg)' : 'rotateZ(0deg)'}}
            onClick={this.addHandler}>
          </i>
        </p>
        <FormContact
          submitHandler={this.submitHandler}
          cancelHandler={this.cancelHandler}
          numberOfContacts={this.props.numberOfContacts}
          formType={this.state.formType}
          visible={this.state.formShown}
        />
      </div>
    )
  }
}

module.exports = Add;
