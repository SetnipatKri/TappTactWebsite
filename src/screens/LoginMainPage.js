import React, { Component } from 'react';
import LoginBox from '../components/LoginBox';
import logo from '../resource/TappTact_Logo.png';
import '../css/LoginBox.css';
class LoginMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="root-container">
                <div className='box-container'>
                    <img src={logo} className="app-logo" alt="logo" />
                    <LoginBox/>
                </div>
            </div>

        );
    }
}

export default LoginMainPage;