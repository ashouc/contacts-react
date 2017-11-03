const React = require('react');

const FullProfile = (props) => {
  return (
    <div className="full-profile" style={{display: (props.display) ? 'inline-block' : 'none'}}>
      <div className="address">
        <p>
        {props.contact.address1} {props.contact.address2}<br/>
        {props.contact.city} {props.contact.state} {props.contact.zip}<br/>
        </p>
      </div>
      <div className="tel-numbers">
        <p>
          <span style={{visibily: (props.contact.mobilePhone) ? 'visible' : 'hidden'}}>
            <i className="fa fa-mobile" aria-hidden="true">&nbsp; </i>{props.contact.mobilePhone}
          </span>
          <br/>
          <span style={{visibily: (props.contact.homePhone) ? 'visible' : 'hidden'}}>
            <i className="fa fa-home" aria-hidden="true">&nbsp; </i>{props.contact.homePhone}
          </span>
          <br/>
          <span style={{visibily: (props.contact.workPhone) ? 'visible' : 'hidden'}}>
            <i className="fa fa-briefcase" aria-hidden="true">&nbsp; </i>{props.contact.workPhone}
          </span>
        </p>
      </div>
    </div>
  )
}

module.exports = FullProfile;
