const React = require('react');
const FormContact = require('./FormContact');
const ViewFullProfile = require('./ViewFullProfile');
const FormButtons = require('./FormButtons');

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShown: false,
      showFullProfile: false,
      deleteConfirmation: false,
      formType: 'update',
      contactInfo : {
        id: this.props.id,
        firstName: this.props.name.first,
        lastName: this.props.name.last,
        jobTitle: this.props.jobTitle,
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        mobilePhone: '',
        homePhone: '',
        workPhone: '',
        email: this.props.email,
        photo: this.props.photo
      }
    };

    this.confirmDeleteContact = () => {
      this.setState({deleteConfirmation: true});
    }

    this.cancelDelete = () => {
      this.setState({deleteConfirmation: false});
    }

    this.changeFormDisplay = (event) => {
      this.setState({formShown: (this.state.formShown) ? false : true});
    };
    this.showFullProfile = (event) => {
      event.preventDefault();
      this.setState({showFullProfile: (this.state.showFullProfile) ? false : true});
      this.getFullProfile();
    };

    this.updateContact = (contact) => {
      console.log(contact);
      debugger;
      let id = contact.id;
      let url = 'http://dev.alexshoucri.com:8888/contacts/' + id;
      axios.put(url, {
        id: id,
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
        photo: contact.photo
      })
      .then((resp) => {
        this.setState({formShown: (this.state.formShown) ? false : true});
      })
      .then(() => {
        this.props.getLatestContacts();
      });
    }

    this.deleteHandler = (event) => {
      event.preventDefault();
      this.deleteContact(this.props.id);

    }

    this.deleteContact = (id) => {
      let url = 'http://dev.alexshoucri.com:8888/contacts/' + id;
      axios.delete(url, {
        params: {}
      })
      .then(() => {
        this.setState({deleteConfirmation: false});
      })
      .then(() => {
        this.props.getLatestContacts();
      });
    }

    this.cancelUpdate = () => {
      this.setState({formShown: (this.state.formShown) ? false : true});
    }

    this.editProfile = (event) => {
      event.preventDefault();
      this.getFullProfile('edit');
    }

    this.getFullProfile = (origin, event) => {
      let id = this.props.id;
      console.log(id)
      let url = 'http://dev.alexshoucri.com:8888/contacts/' + id;
      axios.get(url, {
      })
      .then((resp) => {
        console.log(resp.data)
        this.setState({
          contactInfo: {
            id: this.props.id,
            firstName: resp.data.name.first,
            lastName: resp.data.name.last,
            jobTitle: resp.data.jobTitle,
            address1: resp.data.address.address1,
            address2: resp.data.address.address2,
            city: resp.data.address.city,
            state: resp.data.address.state,
            zip: resp.data.address.zip,
            mobilePhone: resp.data.mobile_phone,
            homePhone: resp.data.home_phone,
            workPhone: resp.data.work_phone,
            email: resp.data.email,
            photo: resp.data.photo
          }
        })
      })
      .then(() => {
        if(origin === 'edit') {
          this.changeFormDisplay();
        }
      });
    }
  }
  render() {
    return (
      <div className='contact'>
        <img style={{}}
        className='profile-picture'
        width='75px'
        src={this.props.photo}/>
        <div className="name" style={{display: 'inline-block'}}>
          <div className='first-name'>
            {this.props.name.first}<span className='last-name'> {this.props.name.last} </span>
            <i className="fa fa-angle-down" aria-hidden="true"
              onClick={this.showFullProfile}
              style={{transform: (this.state.showFullProfile)
                ? "rotateZ(180deg)"
                : 'rotateZ(0deg)'}}>
            </i>
          </div>
          <div className='job-title'>{this.props.jobTitle}</div>
          <ViewFullProfile
            contact={this.state.contactInfo}
            display={this.state.showFullProfile}
          />
          <div className="icons2">
            <a href="mailto:alex@example.com"><i className="email fa fa-envelope-o fa-lg" aria-hidden="true"></i></a>
            <i className="edit fa fa-pencil fa-lg" aria-hidden="true" onClick={this.editProfile}></i>
            <i className="delete fa fa-trash-o fa-lg" aria-hidden="true" onClick={this.confirmDeleteContact}></i>
          </div>
        </div>
        <div className='delete-confirm'
          style={{
            display: (this.state.deleteConfirmation) ? "inline-block" : "none",
            textAlign: 'center',
            width: '100%'
            }}>
          <p>Delete?</p>
          <FormButtons
            cancel={this.cancelDelete}
            deleteContact={this.deleteHandler}
          />
        </div>
        <FormContact
          fullProfile={this.state.contactInfo}
          cancelHandler={this.cancelUpdate}
          updateContact={this.updateContact}
          visible={this.state.formShown}
          formType={this.state.formType}
        />
      </div>
    )
  }
}

module.exports = Contact;
