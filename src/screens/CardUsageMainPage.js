import React, { Component } from 'react';
import '../css/MainPage.css';
import { Doughnut } from 'react-chartjs-2';
class CardUsageMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: [
                    'Sales',
                    'Accountant',
                    'Marketing'
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            },

            data2: {
                labels: [
                    'Sales',
                    'Accountant',
                    'Marketing'
                ],
                datasets: [{
                    data: [20, 10, 30],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            }
        };

    }

    render() {
        return (
            <div className="card-container">
                <div className="card-stat-donut">
                    <Doughnut data={this.state.data} width={600} height={500} options={{
                        title: {
                            display: true,
                            text: 'Card Usage'
                        }
                    }} />
                </div>
                <div className="card-stat-donut">
                    <Doughnut data={this.state.data2} width={600} height={500} options={{
                        title: {
                            display: true,
                            text: 'Monthly Usage'
                        }
                    }} />
                </div>
            </div>
        );
    }
}

export default CardUsageMainPage;