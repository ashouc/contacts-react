const React = require('react');


class FormContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.fullProfile ? this.props.fullProfile.id : '',
      firstName: this.props.fullProfile ? this.props.fullProfile.firstName : '',
      lastName: this.props.fullProfile ? this.props.fullProfile.lastName : '',
      jobTitle: this.props.fullProfile ? this.props.fullProfile.jobTitle : '',
      address1: this.props.fullProfile ? this.props.fullProfile.address1 : '',
      address2: this.props.fullProfile ? this.props.fullProfile.address2 : '',
      city: this.props.fullProfile ? this.props.fullProfile.city : '',
      province: this.props.fullProfile ? this.props.fullProfile.state : '',
      zipcode: this.props.fullProfile ? this.props.fullProfile.zip : '',
      mobilePhone: this.props.fullProfile ? this.props.fullProfile.mobilePhone : '',
      homePhone: this.props.fullProfile ? this.props.fullProfile.homePhone : '',
      workPhone: this.props.fullProfile ? this.props.fullProfile.workPhone : '',
      email: this.props.fullProfile ? this.props.fullProfile.email : '',
      photo: this.props.fullProfile ? this.props.fullProfile.photo : ''
    };
    this.changeHandler = (event) => {
      event.preventDefault();
      this.setState({[event.target.name]: event.target.value})
    };
    this.clearForm = () => {
      this.setState({
        id: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        address1: '',
        address2: '',
        city: '',
        province: '',
        zipcode: '',
        mobilePhone: '',
        homePhone: '',
        workPhone: '',
        email: '',
        photo: ''
      })
    };

    this.cancelButton = () => {
      this.props.cancelHandler();
      this.clearForm();
    }

    this.updateButton = (event) => {
      event.preventDefault();
      this.props.updateContact(this.state);
      this.clearForm();
    }

    this.submitButton = (event) => {
      event.preventDefault();
      this.props.submitHandler(this.state);
      this.clearForm();
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.fullProfile) {
      this.setState ({
        id: nextProps.fullProfile.id,
        firstName: nextProps.fullProfile.firstName,
        lastName: nextProps.fullProfile.lastName,
        jobTitle: nextProps.fullProfile.jobTitle,
        address1: nextProps.fullProfile.address1,
        address2: nextProps.fullProfile.address2,
        city: nextProps.fullProfile.city,
        province: nextProps.fullProfile.state,
        zipcode: nextProps.fullProfile.zip,
        mobilePhone: nextProps.fullProfile.mobilePhone,
        homePhone: nextProps.fullProfile.homePhone,
        workPhone: nextProps.fullProfile.workPhone,
        email: nextProps.fullProfile.email,
        photo: nextProps.fullProfile.photo
      })
    }
  }
  render() {
    return (
      <div className='form' style={{display: (this.props.visible) ? 'block' : 'none', textAlign: 'center'}}>
        <form
          className="create"
          onSubmit={(this.props.formType === "add") ? this.submitButton : this.updateButton} >
          <input className="col" placeholder='First name'
            value={this.state.firstName}
            name='firstName'
            onChange ={ this.changeHandler } required/>
          <input className="col" placeholder='Last name'
            value={this.state.lastName}
            name='lastName'
            onChange ={ this.changeHandler } />
          <input className="col" type="text"
            name="jobTitle"
            value={this.state.jobTitle}
            onChange ={ this.changeHandler }
            placeholder="Job Title" />
          <input className="col" type="text"
            name="address1"
            value={this.state.address1}
            onChange ={ this.changeHandler }
            placeholder="Address 1 (ex. 1234 Foo Bar Baz Street)" />
          <input className="col" type="text"
            name="address2"
            value={this.state.address2}
            onChange ={ this.changeHandler }
            placeholder="Address 2 (optional)" />
          <input className="col" type="text" name="city"
            value={this.state.city}
            onChange ={ this.changeHandler }
            placeholder="City" />
          <input className="col" type="text"
            name="province"
            value={this.state.province}
            onChange ={ this.changeHandler }
            placeholder="State" />
          <input className="col" type="text"
            name="zipcode"
            value={this.state.zipcode}
            onChange ={ this.changeHandler }
            placeholder="Zip code" />
          <input className="col" type="tel"
            name="mobilePhone"
            value={this.state.mobilePhone}
            onChange ={ this.changeHandler }
            placeholder="Mobile number (ex. 123-456-7890)" required/>
          <input className="col" type="tel"
            name="homePhone"
            value={this.state.homePhone}
            onChange ={ this.changeHandler }
            placeholder="Home number" required/>
          <input className="col" type="tel"
            name="workPhone"
            value={this.state.workPhone}
            onChange ={ this.changeHandler }
            placeholder="Work number" />
          <input className="col" type="email"
            name="email"
            value={this.state.email}
            onChange ={ this.changeHandler }
            placeholder="your@email.com" />
          <input className="col add-picture" type="url"
            name="photo"
            value={this.state.photo}
            onChange ={ this.changeHandler }
            placeholder="Please add the URL to the profile picture" />
          <div className='buttons'>
            <button className="form-btn new"
              type="submit"
              name="button"
              style={{display: (this.props.formType === "add") ? "inline-block" : "none"}}>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            </button>
            <button className="form-btn update"
              type="submit"
              name="button"
              style={{display: (this.props.formType === "update") ? "inline-block" : "none"}}>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            </button>
            <button className="form-btn cancel"
              type="button"
              name="cancel"
              onClick={this.cancelButton}>
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    )
  };
}

module.exports = FormContact;
