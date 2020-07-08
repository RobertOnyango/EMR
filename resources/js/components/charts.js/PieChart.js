import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pieData: props.admissionsData
        };
    }
    render() {
        return (
            <div className="piechart">
                <Pie
                    data={this.state.pieData}
                    options={{
                        title: {
                            display: true,
                            text: "Admissions",
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

export default PieChart;
