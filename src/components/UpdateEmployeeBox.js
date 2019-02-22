import React, { } from 'react';
import '../css/AddEmployee.css';
import {Link} from 'react-router-dom'
class UpdateEmployeeBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) { }

  render() {
    return (
      <div className="root-container-adduser">
      <div className="header-adduser">
        Update User
        <div className="upload-image-box">
          <img src={require('../resource/icon_user.png')} className="detail-upload-picture" />
        </div>
        <button
          type="button"
          className="upload-user-btn"
          onClick={this
            .submitRegister
            .bind(this)}>Upload</button>
        </div>
      <div className="allbox">
        <div className="box-container-adduser">
          <div className="input-group">
            <label className="labeling">* Firstname</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Firstname" />
          </div>
          <div className="input-group">
            <label className="labeling">* Lastname</label>
            <input type="text" name="lname" className="login-input" placeholder="Lastname" />
          </div>

          <div className="input-group">
            <label className="labeling">* Department</label>
            <input type="text" name="dep" className="login-input" placeholder="Department" />
          </div>

        </div>
        <div className="box-container-adduser">
          <div className="input-group">
            <label className="labeling">* Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email" />
          </div>
          <div className="input-group">
            <label className="labeling">* Username</label>
            <input type="text" name="email" className="login-input" placeholder="Username" />
          </div>

          <div className="input-group">
            <label className="labeling">* Password</label>
            <input type="text" name="companyName" className="login-input" placeholder="Password" />
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

export default UpdateEmployeeBox;