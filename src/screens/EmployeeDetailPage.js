import React, { Component } from 'react';
import '../css/EmployeeDetail.css';
import { Line } from 'react-chartjs-2';
import {Link,Redirect} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' 
class EmployeeDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
                datasets: [
                    {
                        label: 'Card Exchange 2017',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [15, 5, 20, 11, 5, 25]
                    }
                ]
            },
            data2: {
                labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
                datasets: [
                    {
                        label: 'Card Exchange 2018',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(233,100,192,0.4)',
                        borderColor: 'rgba(233,100,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [2, 20, 10, 12, 10, 25]
                    }
                ]
            },
            isDelete:false
        
        };
    }

    submit = () => {
        // confirmAlert({
        //   title: 'Delete Employee',                        // Title dialog
        //   message: 'Are you sure to delete this employee data',               // Message dialog
        //   confirmLabel: 'Yes',                           // Text button confirm
        //   cancelLabel: 'No',                             // Text button cancel
        //   onConfirm: () => {
        //       console.log("Confirm")
        //       this.setState({isDelete: true})
        //   },    
        //   onCancel: () =>  {
        //       console.log("Not Delete")
        //   }      // Action after Cancel
        // })
      };


    render() {
        if (this.state.isDelete === true) {
            return <Redirect to='/update'/>
        }
        return (
            <div className="card-container-detail">
                <div className="info-box">
                    <div className="info">
                        <img src={require('../resource/icon_user.png')} className="detail-picture" />
                        <div className="info-box">
                            <h3>FName + LName</h3>
                            <h4>Department : Marketing PR</h4>
                            <h4>Card Usage : 281</h4>
                            <div className="button-detail-box">
                            <Link to ="/update">
                            <button className="button-detail-blue">Update</button>
                            </Link>
                        
                            <button className="button-detail-red" onClick={this.submit}>Delete</button>

                            </div>
                        </div>

                    </div>
            
                    
                    <div className="info">
                        <div className="card-stat-donut-detail">
                            <Line data={this.state.data} />
                        </div>
                        <div className="card-stat-donut-detail">
                            <Line data={this.state.data2} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default EmployeeDetailPage;