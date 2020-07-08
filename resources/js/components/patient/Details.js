import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Details({ nextStep }) {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    };
    return (
        <div>
            <h4>Patient Details</h4>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter Patient Full Name"
                    />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" name="gender">
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="age">
                            <Form.Label>Patient Age</Form.Label>
                            <Form.Control
                                name="age"
                                type="string"
                                placeholder="Enter Patient Age"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="height">
                            <Form.Label>Patient Height</Form.Label>
                            <Form.Control
                                name="height"
                                type="string"
                                placeholder="Height in cm"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="weight">
                            <Form.Label>Patient Weight</Form.Label>
                            <Form.Control
                                name="weight"
                                type="string"
                                placeholder="Weight in kg"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="allergies">
                    <Form.Label>Allergies</Form.Label>
                    <Form.Control
                        name="allergies"
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
