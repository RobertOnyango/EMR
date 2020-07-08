import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doughnutData: props.drugsData
        };
    }
    render() {
        return (
            <div className="doughnut-chart">
                <Doughnut
                    data={this.state.doughnutData}
                    options={{
                        title: {
                            display: true,
                            text: "Prescriptions - Drug Category",
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }}
                />
            </div>
        );
    }
}

export default DoughnutChart;
