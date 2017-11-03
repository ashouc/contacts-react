const React = require('react');

class FormButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='button'>
        <button
          onClick={this.props.deleteContact}
          className="form-btn del"
          type="button"
          name="delete">
          <i className="fa fa-check-circle" aria-hidden="true"></i>
        </button>
        <button className="form-btn cancel"
          type="button"
          name="cancel"
          onClick={this.props.cancel}>
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

module.exports = FormButtons;
