import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Schedule = () => (
    <section id='schedule' className='text-center p-5'>
        <h2>Tréninky</h2>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Pondělí</Card.Title>
                            <Card.Text>17:00 - 19:00</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </section>
);

export default Schedule;