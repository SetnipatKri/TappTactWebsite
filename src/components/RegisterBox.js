import React, { } from 'react';
import '../css/LoginBox.css';
import {Link} from 'react-router-dom'
class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) { }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
          </div>
        <div className="box">

          <div className="input-group">
            <label className="labeling">* Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username" />
          </div>

          <div className="input-group">
            <label className="labeling">* Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password" />
          </div>

          <div className="input-group">
            <label className="labeling">* Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email" />
          </div>

          <div className="input-group">
            <label className="labeling">* Company Name</label>
            <input type="text" name="companyName" className="login-input" placeholder="Company Name" />
          </div>

          <div className="input-group">
            <label className="labeling">Phone Number</label>
            <input type="text" name="phone" className="login-input" placeholder="Phone Number" />
          </div>
          <Link to ="/">
          <button
            type="button"
            className="login-btn"
            onClick={this
              .submitRegister
              .bind(this)}>Submit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default RegisterBox;