import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Testimonials = () => (
    <section id='testimonials' className='text-center p-5'>
        <h2>Co o nás říkají naši studenti</h2>
            <Row className="text-center p-5">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Text>"Nejlepší škola"</Card.Text>
                            <Card.Footer>- Ondra</Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </section>
);

export default Testimonials;