import React, { Component } from "react";
import Details from "./patient/Details";
import Observations from "./patient/Observations";
import Diagnosis from "./patient/Diagnosis";
import Prescription from "./patient/Prescription";
import { Container } from "react-bootstrap";

class Patient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Flags
            step: 1,
            init: 0,
            //details
            patient_id: "",
            name: "",
            nameError: "",
            gender: "",
            genderError: "",
            age: "",
            ageError: "",
            weight: "",
            weightError: "",
            height: "",
            heightError: "",
            allergies: "",
            allergiesError: "",
            //observations
            doctor_id: "",
            temperature: "",
            temperatureError: "",
            blood_pressure: "",
            blood_pressureError: "",
            lab_results: "",
            lab_resultsError: "",
            patient_comments: "",
            patient_commentsError: "",
            //diagnosis
            diagnosis_id: "",
            observation_id: "",
            illness: "",
            illnessError: "",
            causes: "",
            causesError: "",
            doc_advice: "",
            doc_adviceError: "",
            admission: "",
            admissionError: "",
            //prescription
            medicine_id: "",
            usage: "",
            usageError: "",
            quantity: "",
            quantityError: "",
            duration: "",
            durationError: ""
        };

        this.nextStep = this.nextStep.bind(this);
        this.switchPage = this.switchPage.bind(this);
    }

    switchPage(param) {
        const {
            init,
            patient_id,
            name,
            nameError,
            gender,
            genderError,
            age,
            ageError,
            weight,
            weightError,
            height,
            heightError,
            allergies,
            allergiesError,
            //observations
            doctor_id,
            temperature,
            temperatureError,
            blood_pressure,
            blood_pressureError,
            lab_results,
            lab_resultsError,
            patient_comments,
            patient_commentsError,
            //diagnosis
            diagnosis_id,
            observation_id,
            illness,
            illnessError,
            causes,
            causesError,
            doc_advice,
            doc_adviceError,
            admission,
            admissionError,
            //prescription
            medicine_id,
            usage,
            usageError,
            quantity,
            quantityError,
            duration,
            durationError
        } = this.state;

        const values = {
            init,
            patient_id,
            name,
            nameError,
            gender,
            genderError,
            age,
            ageError,
            weight,
            weightError,
            height,
            heightError,
            allergies,
            allergiesError,
            //observations
            doctor_id,
            temperature,
            temperatureError,
            blood_pressure,
            blood_pressureError,
            lab_results,
            lab_resultsError,
            patient_comments,
            patient_commentsError,
            //diagnosis
            diagnosis_id,
            observation_id,
            illness,
            illnessError,
            causes,
            causesError,
            doc_advice,
            doc_adviceError,
            admission,
            admissionError,
            //prescription
            medicine_id,
            usage,
            usageError,
            quantity,
            quantityError,
            duration,
            durationError
        };

        switch (param) {
            case 1:
                return <Details nextStep={this.nextStep} values={values} />;

            case 2:
                return (
                    <Observations nextStep={this.nextStep} values={values} />
                );
            case 3:
                return <Diagnosis nextStep={this.nextStep} values={values} />;
            case 4:
                return (
                    <Prescription nextStep={this.nextStep} values={values} />
                );
        }
    }

    // Proceed to next step
    nextStep() {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    render() {
        const { step } = this.state;
        return (
            <div>
                <Container>{this.switchPage(step)}</Container>
            </div>
        );
    }
}

export default Patient;
