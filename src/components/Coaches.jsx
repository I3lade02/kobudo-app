import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Coaches.css';

const Coaches = () => {
    return (
        <section id='coaches'>
            <h2 className='text-center'>Trenéři</h2>
            <div className='coaches-section'>
                <Row className='justify-content-center align-items-center'>
                    <Col md={4} className='coach-container'>
                        <h2>- Choki -</h2>
                        <div className='coach-image' style={{ backgroundImage: `url('../image/choki.png')` }}>
                            <div className='coach-info'>
                                <h3>Trenér Choki</h3>
                                <p>Zakladatel školy<br />Držitel 2. DANu<br />Učitel: začátky práce s katanou, sestav a obecné znalosti o Iaido, Battojustu, Jo</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='text-center'>
                        <img src="../image/katanaImage.jpg" alt="crossed katana" className="katana-image" />
                    </Col>
                    <Col md={4} className='coach-container'>
                        <h2>- Barča -</h2>
                        <div className='coach-image' style={{ backgroundImage: `url('../image/bara_v2.jpeg')` }}>
                            <div className='coach-info'>
                                <h3>Trenérka Barča</h3>
                                <p>Spoluzakladatelka školy<br />Baletka a gymnastka<br />Učitelka: správné dýchání, držení těla, balancu a posilování</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};


export default Coaches;