import React, { Component } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import axios from "axios";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: "",
            male: "",
            female: "",

            antibiotics: "",
            painkillers: "",
            supplements: "",

            admitted: "",
            released: "",

            //Medicines
            doughnutChart: {
                labels: ["Antibiotics", "Painkillers", "Supplements"],
                datasets: [
                    {
                        data: [3, 2, 1],
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                    }
                ]
            },

            //Admissions
            pieChart: {
                labels: ["Admitted", "Released"],
                datasets: [
                    {
                        data: [3, 5],
                        backgroundColor: ["#FF6384", "#36A2EB"],
                        hoverBackgroundColor: ["#FF6384", "#36A2EB"]
                    }
                ]
            }
        };
    }

    componentDidMount() {
        this.getPatients();
        this.getMalePatients();
        this.getFemalePatients();

        //this.getMedicines();
        this.getAntibioticMedicines();
        this.getPainkillerMedicines();
        this.getSupplementMedicines();

        this.getAdmittedPatients();
        this.getReleasedPatients();
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

    getAdmittedPatients() {
        axios
            .get(`http://127.0.0.1:8000/api/diagnosis/admitted`)
            .then(response => {
                this.setState({
                    admitted: response.data
                });
            });
    }

    getReleasedPatients() {
        axios
            .get(`http://127.0.0.1:8000/api/diagnosis/released`)
            .then(response => {
                this.setState({
                    released: response.data
                });
            });
    }

    getAntibioticMedicines() {
        axios
            .get(`http://127.0.0.1:8000/api/medicines/antibiotics`)
            .then(response => {
                this.setState({
                    antibiotics: response.data
                });
            });
    }

    getPainkillerMedicines() {
        axios
            .get(`http://127.0.0.1:8000/api/medicines/painkillers`)
            .then(response => {
                this.setState({
                    painkillers: response.data
                });
            });
    }

    getSupplementMedicines() {
        axios
            .get(`http://127.0.0.1:8000/api/medicines/supplements`)
            .then(response => {
                this.setState({
                    supplements: response.data
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h2>Patients Numerics:</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-header">
                                    <h4>Patients Seen</h4>
                                </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <h5>{this.state.patients}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-header">
                                    <h4>Male Patients</h4>
                                </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <h5>{this.state.male}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-header">
                                    <h4>Female Patients</h4>
                                </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <h5>{this.state.female}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h2>Drugs administered:</h2>
                            <Doughnut data={this.state.doughnutChart} />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h2>Admissions</h2>
                            <Pie data={this.state.pieChart} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
