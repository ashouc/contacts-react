const React = require('react');

class FormButtons extends React.Component {
  constructor(props) {
    super(props);
    this.cancelButton = (event) => {
      event.preventDefault();
      this.props.cancelHandler();
      this.props.clearForm();
    }

    this.updateButton = (event) => {
      event.preventDefault();
      this.props.updateHandler();
      this.props.clearForm();
    }

    this.submitButton = (event) => {
      event.preventDefault();
      this.props.submitHandler();
      this.props.clearForm();
    }
  }
  render() {
    return(
      <div className='button'>
        <button onSubmit={this.submitButton} className="form-btn new"
        type="button"
        name="button"
        style={{display: (this.props.formType === "add") ? "inline-block" : "none"}}>
        Create contact</button>
        <button onSubmit={this.updateButton} className="form-btn update"
        type="button"
        name="button"
        style={{display: (this.props.formType === "update") ? "inline-block" : "none"}}>
        Update contact</button>&nbsp;
        <button className="form-btn cancel"
          type="button"
          name="cancel"
          onClick={this.cancelButton}>Cancel</button>
      </div>
    )
  }
}
