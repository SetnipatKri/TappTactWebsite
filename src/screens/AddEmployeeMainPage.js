import React, { Component } from 'react';
import '../css/MainPage.css';
import AddEmpBox from '../components/AddEmployeeBox';
class AddEmployeeMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="card-container">
                <AddEmpBox/>
            </div>
        );
    }
}

export default AddEmployeeMainPage;