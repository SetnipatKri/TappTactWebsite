import React, { } from 'react';
import '../css/LoginBox.css';
import {Link} from 'react-router-dom'
class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      username: "",
      password: ""
    };
  }

  submitLogin(e) {
    //Validation Part

    //fetch data part
  }

  navigateRegister(e){

  }
  //Component Function
  


  //Div Function

  onUserNameChange(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Welcome to TappTact
          </div>
        <div className="box">

          <div className="input-group">
            <label className="labeling">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.onUserNameChange.bind(this)} />
          </div>

          <div className="input-group">
            <label className="labeling">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.onPasswordChange.bind(this)} />
          </div>

          <Link to ="/list">
          <button
            type="button"
            className="login-btn"
            onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          </Link>
          
          <Link to ="/register">
          <button
            type="button"
            className="register-btn"
            onClick={this
              .navigateRegister
              .bind(this)}>
              Register</button>
          </Link>
          
        </div>


      </div>
    );
  }

}
export default LoginBox;