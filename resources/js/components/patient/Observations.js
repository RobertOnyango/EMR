import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Observations({ nextStep }) {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    };
    return (
        <div>
            <h4>Doctor's Observations</h4>
            <Form>
                <Form.Group controlId="patient_comments">
                    <Form.Label>Patient Complaint</Form.Label>
                    <Form.Control
                        name="patient_comments"
                        as="textarea"
                        rows="3"
                        placeholder="Enter patient complaint"
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="temperature">
                            <Form.Label>Temperature</Form.Label>
                            <Form.Control
                                name="temperature"
                                type="string"
                                placeholder="Tempearture in celcius"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blood_pressure">
                            <Form.Label>Blood Pressure</Form.Label>
                            <Form.Control
                                name="blood_pressure"
                                type="string"
                                placeholder="blood pressure"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="lab_results">
                    <Form.Label>Allergies</Form.Label>
                    <Form.Control
                        name="lab_results"
                        as="textarea"
                        rows="3"
                        placeholder="If available"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={Continue}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}
