import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../About.css';


const About = () => {
    return (
        <section id='about'>
            <div className='about-section'>
                <Row className='justify-content-center'>
                    {/* First Row */}
                    <Col md={3} className='d-flex justify-content-center mb-4'>
                        <Card className='text-center w-100'>
                            <Card.Body>
                                <Card.Title>Co nabízíme</Card.Title>
                                <Card.Text>
                                    Tradiční kombinace japonských bojových umění Iaido a Kenjutsu. Všechny tyto dovednosti jsou učeny tradičně a každému žákovi se tak dostává individuálního přístupu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center mb-4'>
                        <Card className='text-center w-100'>
                            <Card.Body>
                                <Card.Title>Kde nás najdete</Card.Title>
                                <Card.Text>
                                    Najdete nás na adrese ZŠ Palachova Palachova 400, 400 01 Ústí nad Labem-město-Klíše. Doprava k nám je jednoduchá! Stačí z centra města nastoupit na autobus číslo 71 nebo 81 a vystoupit na zastávce Bezručova.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center mb-4'>
                        <Card className='text-center w-100'>
                            <Card.Body>
                                <Card.Title>Tréninky</Card.Title>
                                <Card.Text>
                                    Konají se každý pátek od 17:00 do 19:00, ale je lepší být na místě pár minut předem, kvůli převlečení. S sebou sportovní oblečení, vhodné vzít si nějaký pásek, vlastní katana výhodou, ne však nutnostní.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    {/* Second Row */}
                    <Col md={3} className='d-flex justify-content-center mb-4'>
                        <Card className='text-center w-100'>
                            <Card.Body>
                                <Card.Title>Ceny a docházka</Card.Title>
                                <Card.Text>
                                    Docházka není povinná, ale je důležité dát včas vědět jestli přijdete nebo ne. Co se cen týče, první lekce je vždy zdarma pro vyzkoušení abyste věděli, zda-li Vás to bude bavit. Každá další lekce je potom za 100,- Kč.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center mb-4'>
                        <Card className='text-center w-100'>
                            <Card.Body>
                                <Card.Title>Mapa</Card.Title>
                                <iframe
                                    src='https://en.frame.mapy.cz/s/bututunufu'
                                    width= '100%'
                                    height= '300'
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading='lazy'
                                    referrerPolicy='no-refferrer-when-downgrade'
                                    title='training location map'
                                ></iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center mb-4'>
                        <Card className='text-center w-100'>
                            <Card.Body>
                                <Card.Title>Podoba tréninku</Card.Title>
                                <Card.Text>
                                 Začínají důkladným protažením v doprovodu naší trenérky Baru Dále se věnujeme základním slušnostem a zvykům v japonské kultuře a samotnému tréninku iaido. Každý student si může jet svým tempem, tudíž nikdo nikdy není pozadu. Každý student má také právo na zkoušku pro zvednutí svého Kyu(9 - 6) nebo Danu (1 - 8).
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default About;
