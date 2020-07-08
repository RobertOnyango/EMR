import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Diagnosis({ nextStep }) {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    };
    return (
        <div>
            <h4>Illness diagnosis</h4>
            <Form>
                <Form.Group controlId="illness">
                    <Form.Label>Illness Name</Form.Label>
                    <Form.Control
                        name="illness"
                        type="text"
                        placeholder="Enter Patient Illness"
                    />
                </Form.Group>

                <Form.Group controlId="causes">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control
                        name="causes"
                        type="text"
                        placeholder="Enter possible illness causes"
                    />
                </Form.Group>

                <Form.Group controlId="doc_advice">
                    <Form.Label>Doctor's Comments</Form.Label>
                    <Form.Control
                        name="doc_advice"
                        as="textarea"
                        rows="3"
                        placeholder="Enter your comments/advice"
                    />
                </Form.Group>

                <Form.Group controlId="admission">
                    <Form.Label>Admit Patient?</Form.Label>
                    <Form.Control as="select" name="admission">
                        <option>no</option>
                        <option>yes</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={Continue}>
                Submit
            </Button>
        </div>
    );
}
