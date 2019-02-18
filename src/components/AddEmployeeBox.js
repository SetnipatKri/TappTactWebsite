import React, { } from 'react';
import '../css/AddEmployee.css';
import {Link} from 'react-router-dom'
class AddEmployeeBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) { }

  render() {
    return (
      <div className="root-container-adduser">
        <div className="header-adduser">
          Add User
        </div>
        <div className="allbox">
        <div className="box-container-adduser">
          <div className="input-group">
            <label className="labeling">* Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username" />
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

        </div>
        <div className="box-container-adduser">
          <div className="input-group">
            <label className="labeling">* Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username" />
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
        </div>
        </div>
        <div className="btn-box">
          <button
            type="button"
            className="adduser-btn"
            onClick={this
              .submitRegister
              .bind(this)}>Submit</button>
          </div>
      </div>
    );
  }
}

export default AddEmployeeBox;