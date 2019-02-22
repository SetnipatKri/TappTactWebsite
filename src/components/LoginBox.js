import React, { } from 'react';
import '../css/LoginBox.css';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom'
class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      username: "",
      password: "",
      loginComplete: false,
    };
  }

  submitLogin(e) {
    //Validation Part
    if(this.state.username.length<6)
    {
      console.log('username too short')
    }
    else if((this.state.username.length>18))
    {
      console.log('username too long')
    }
    else if(!(/^[a-zA-Z0-9]+$/.test(this.state.username)))
    {
      console.log('username contain in valid letter')
    }
    //Check Password
    else if(this.state.password.length<6)
    {
      console.log('password too short')
    }
    else if(this.state.password.length>18)
    {
      console.log('password too long')
    }
    else if(!(/^[a-zA-Z0-9]+$/.test(this.state.password)))
    {
      console.log('password contain invalid letter')
    }
    //fetch data part
    else
    {
      const bodyAPI = {
        "Username": this.state.username,
        "Password": this.state.password
      }
      axios.post(`https://us-central1-tapptact-219009.cloudfunctions.net/companyLogin`, bodyAPI)
      .then(res => {
        if(res.data.hasOwnProperty('errorType'))
        {
         console.log('not found')
        }
        else
        {
          console.log(res.data)
          this.setState({loginComplete: true})
        }
      })
    }
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
    if (this.state.loginComplete === true) {
      return <Redirect to='/list'/>
    }
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

          <button
            type="button"
            className="login-btn"
            onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          
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