import React, { Component } from 'react';
import '../css/MainPage.css';
import RegisterBox from '../components/RegisterBox';
class AddEmployeeMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="card-container">
                <RegisterBox/>
            </div>
        );
    }
}

export default AddEmployeeMainPage;