import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Schedule = () => (
    <section id='schedule' className='text-center p-5'>
        <h2>Tréninky</h2>
            <Row className='justify-content-center'>
                <Col md={3} style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Pátek</Card.Title>
                            <Card.Text>17:00 - 19:00</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </section>
);

export default Schedule;