import React, { Component } from 'react';
import '../css/MainPage.css';
import { Nav,NavItem,NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="header-container">
                <Nav>
                    <NavItem>
                        <NavLink href="/list" className="header-text" >Employee List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/add" className="header-text">Add Employee</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/usage" className="header-text">Card Usage</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/package" className="header-text">Package</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" className="header-text">Logout</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default MainPage;