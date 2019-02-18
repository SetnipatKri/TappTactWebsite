import React, { Component } from 'react';
import RegisterBox from '../components/RegisterBox';
import '../css/LoginBox.css';
class RegisterMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="root-container">
            <div className='box-container'>
                <RegisterBox/>
            </div>
        </div>

        );
    }
}

export default RegisterMainPage;