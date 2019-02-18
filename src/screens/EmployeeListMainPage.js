import React, { Component} from 'react';
import '../css/MainPage.css';
import ReactTable from 'react-table'
import "react-table/react-table.css"
import {Link} from 'react-router-dom'

class EmployeeListMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users"
        fetch(url, {
            method: 'GET'
        }).then(response => response.json()).then(user => {
            this.setState({users:user})
        })
    }

    render() {
        const columns = [
            {
                Header: "ID",
                accessor: "id",
                style:{
                    textAlign:"center"
                },
                width:100,
                maxWidth:100,
                midWidth:50
            },
            {
                Header: "Name",
                accessor: "name",
                sortable: false,
                filterable: true,
                style:{
                    textAlign:"left"
                },
                width:500,
                maxWidth:100,
                midWidth:50
            },
            {
                Header: "Email",
                accessor: "email",
                sortable: false,
                filterable: true,
                style:{
                    textAlign:"left"
                },
                width:500,
                maxWidth:900,
                midWidth:600
            },
            {
                Header: "View",
                Cell: props=>{
                    return(
                        <div className="table-box">
                        <Link to ="/detail">
                         <button className="button-blue">View</button>
                         </Link>
                        </div>
                    )
                },
                width:100,
                maxWidth:100,
                midWidth:50
            },
            {
                Header: "Update",
                Cell: props=>{
                    return(
                        <div className="table-box">
                        <button className="button-blue">Update</button>
                       </div>
                    )
                },
                width:100,
                maxWidth:100,
                midWidth:50
            },
            {
                Header: "Delete",
                Cell: props=>{
                    return(
                        <div className="table-box">
                        <button className="button-red">Delete</button>
                       </div>
                    )
                },
                width:100,
                maxWidth:100,
                midWidth:50
            },

        ]
        return (
            <div className="card-container">
               
                <ReactTable columns={columns} data={this.state.users} defaultPageSize={10} noTextData={"Loading.."}>

                </ReactTable>
            </div>
        );
    }
}

export default EmployeeListMainPage;