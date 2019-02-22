import React, { Component } from 'react';
import '../css/MainPage.css';
import UpdateEmpBox from '../components/UpdateEmployeeBox';
class EmployeeDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    
    render() {
        return (
            <div className="card-container">
                <UpdateEmpBox/>
            </div>
        );
    }
}

export default EmployeeDetailPage;