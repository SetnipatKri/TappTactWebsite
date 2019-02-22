import React, { Component} from 'react';
import '../css/MainPage.css';
import ReactTable from 'react-table'
import "react-table/react-table.css"
import {Link} from 'react-router-dom'

class EmployeeListMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
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

    deleteRow(id){

        const index = this.state.users.findIndex(users=>{
            return users.id===id
        })
        let usertemp = [...this.state.users]
        //console.log(usertemp)
        usertemp.splice(index,1)
        this.setState({users:usertemp})
    }

    render() {
        const columns = [
            {
                Header: "ID",
                accessor: "id",
                style:{
                    textAlign:"center"
                },
                width:50,
                maxWidth:50,
                midWidth:50
            },
            {
                Header: "Image",
                Cell: props=>{
                    return(
                        <div>
                         <img  src={require('../resource/icon_user.png')} className="pic-image" />
                        </div>
                    )
                },
                width:100,
                maxWidth:100,
                midWidth:100
            },
            {
                Header: "FName",
                accessor: "name",
                sortable: false,
                filterable: true,
                style:{
                    textAlign:"left"
                },
                width:200,
                maxWidth:200,
                midWidth:150
            },
            {
                Header: "LName",
                accessor: "name",
                sortable: false,
                filterable: true,
                style:{
                    textAlign:"left"
                },
                width:200,
                maxWidth:200,
                midWidth:150
            },
            {
                Header: "Email",
                accessor: "email",
                sortable: false,
                filterable: true,
                style:{
                    textAlign:"left"
                },
                width:300,
                maxWidth:900,
                midWidth:600
            },
            {
                Header: "Department",

                sortable: false,
                filterable: true,
                style:{
                    textAlign:"left"
                },
                width:200,
                maxWidth:900,
                midWidth:600
            },
            {
                Header: "View",
                Cell: props=>{
                    return(
                        <div className="table-box">
                        <Link className="button-blue" to ="/detail">
                         <button className="button-blue">View</button>
                         </Link>
                        </div>
                    )
                },
                width:90,
                maxWidth:100,
                midWidth:50
            },
            {
                Header: "Update",
                Cell: props=>{
                    return(
                        <div className="table-box">
                        <Link className="button-blue" to ="/update">
                        <button className="button-blue">Update</button>
                        </Link>
                       </div>
                    )
                },
                width:90,
                maxWidth:100,
                midWidth:50
            },
            {
                Header: "Delete",
                Cell: props=>{
                    return(
                        <div className="table-box">
                        <button className="button-red" onClick={()=>this.deleteRow(props.original.id)}>Delete</button>
                       </div>
                    )
                },
                width:90,
                maxWidth:100,
                midWidth:50
            },

        ]
        return (
            <div className="card-container">
                <div className="table-container">
                <ReactTable columns={columns} data={this.state.users} defaultPageSize={10} noTextData={"Loading.."}>

                </ReactTable>
                </div>
            </div>
        );
    }
}

export default EmployeeListMainPage;