import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default function Prescription({ values }) {
    const [count, setCount] = React.useState(values.init);
    const HomePage = () => {
        console.log(values.init);
        setCount(1);
    };

    return (
        <div>
            <h4>Doctor's Prescription</h4>
            <Form>
                <Form.Group controlId="admission">
                    <Form.Label>Medicine Name</Form.Label>
                    <Form.Control as="select" name="admission">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="usage">
                    <Form.Label>Prescription</Form.Label>
                    <Form.Control
                        name="usage"
                        type="text"
                        placeholder="Enter prescription"
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="quantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                name="quantity"
                                type="text"
                                placeholder="Enter amount of drugs given"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="duration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control
                                name="duration"
                                type="text"
                                placeholder="Enter how long patient is to take drugs"
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>

            <Button variant="primary" type="submit" onClick={HomePage}>
                Submit
            </Button>

            {count === 1 ? <Redirect to="/home" /> : ""}
        </div>
    );
}
