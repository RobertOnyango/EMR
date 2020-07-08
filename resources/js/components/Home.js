import React, { Component } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import axios from "axios";
import { Link } from "react-router-dom";
import DoughnutChart from "./charts.js/DoughnutChart";
import PieChart from "./charts.js/PieChart";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Flags
            init: 0,
            foo: 0,

            patients: "",
            male: "",
            female: "",

            drugsData: {},
            admissionsData: {}
        };
    }

    componentDidMount() {
        this.getPatients();
        this.getMalePatients();
        this.getFemalePatients();

        this.getMedicines();

        this.getAdmissions();
    }

    getPatients() {
        axios.get(`http://127.0.0.1:8000/api/patients`).then(response => {
            this.setState({
                patients: response.data
            });
        });
    }

    getMalePatients() {
        axios.get(`http://127.0.0.1:8000/api/patients/males`).then(response => {
            this.setState({
                male: response.data
            });
        });
    }

    getFemalePatients() {
        axios
            .get(`http://127.0.0.1:8000/api/patients/females`)
            .then(response => {
                this.setState({
                    female: response.data
                });
            });
    }

    getAdmissions() {
        axios
            .all([
                axios.get(`http://127.0.0.1:8000/api/diagnosis/admitted`),
                axios.get(`http://127.0.0.1:8000/api/diagnosis/released`)
            ])
            .then(response => {
                console.log(response[0].data);
                this.setState({
                    admissionsData: {
                        labels: ["Admitted", "Released"],
                        datasets: [
                            {
                                data: [response[0].data, response[1].data],
                                backgroundColor: ["#FF6384", "#36A2EB"],
                                hoverBackgroundColor: ["#FF6384", "#36A2EB"]
                            }
                        ]
                    },
                    init: 1
                });
            });
    }

    getMedicines() {
        axios
            .all([
                axios.get(`http://127.0.0.1:8000/api/medicines/antibiotics`),
                axios.get(`http://127.0.0.1:8000/api/medicines/painkillers`),
                axios.get(`http://127.0.0.1:8000/api/medicines/supplements`)
            ])
            .then(response => {
                this.setState({
                    drugsData: {
                        labels: ["Antibiotics", "Painkillers", "Supplements"],
                        datasets: [
                            {
                                data: [
                                    response[0].data,
                                    response[1].data,
                                    response[2].data
                                ],
                                backgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ]
                            }
                        ]
                    },
                    foo: 1
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.init && this.state.foo ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div
                                    className="card"
                                    style={{ width: "15rem" }}
                                >
                                    <div
                                        className="card-header"
                                        style={{ textAlign: "center" }}
                                    >
                                        <h4>Total Patients</h4>
                                    </div>
                                    <div className="card-body">
                                        <div
                                            className="card-text"
                                            style={{ textAlign: "center" }}
                                        >
                                            <h5>{this.state.patients}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div
                                    className="card"
                                    style={{ width: "15rem" }}
                                >
                                    <div
                                        className="card-header"
                                        style={{ textAlign: "center" }}
                                    >
                                        <h4>Male Patients</h4>
                                    </div>
                                    <div className="card-body">
                                        <div
                                            className="card-text"
                                            style={{ textAlign: "center" }}
                                        >
                                            <h5>{this.state.male}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div
                                    className="card"
                                    style={{ width: "15rem" }}
                                >
                                    <div
                                        className="card-header"
                                        style={{ textAlign: "center" }}
                                    >
                                        <h4>Female Patients</h4>
                                    </div>
                                    <div className="card-body">
                                        <div
                                            className="card-text"
                                            style={{ textAlign: "center" }}
                                        >
                                            <h5>{this.state.female}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <Link to="/patient">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        Add New Patient
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <DoughnutChart
                                    drugsData={this.state.drugsData}
                                />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <PieChart
                                    admissionsData={this.state.admissionsData}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </React.Fragment>
        );
    }
}

export default Home;
