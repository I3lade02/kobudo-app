import React, { useEffect, useState, useCallback } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';


const Testimonials = () => {
    const testimonies = [
        {text: "Tréninky jsou velice zábavné a rozmanité. Při samotném tréninku s katanou je skvělé, že se člověk nemusí bát udělat chybu. Pokud něco nevím, stačí se zeptat. Prokládání posilováním, či různými dechovými cvičeními pomáhá se zlepšením fyzické kondice, držením těla apod. A to vše je pak velice užitečné i při samotném používání meče. Trénink tak není repetetivní. Navíc každý dostává individuální přístup trenérů a je pak snazší uvědomit si své nedostatky a učit se rychleji. Nemluvě o skvělém kolektivu, ve kterém vás nikdo neodsuzuje za chyby, které děláte, naopak vás všichni podpoří ve zlepšení. Doporučuji", person: "Maru"},
        {text: "Dle mě je to skvěle pojaté. Kdo je fanouškem Japonska nebo šermu s katanami, tak se tu určitě najde. Trenér Choki Vás toho hodně naučí a trenérka Barča se zaměřuje na očistu mysli, správné držení těla a dýchání, celkově bomba aktivita ve skvělém kolektivu lidí", person: "Honza"},
        {text: "Na trénincích si přijdu skvěle. Jsou tu lidé, co mi rozumí, klidní a chápaví trenéři, kteří tomu věnují čas a baví je to. Konečně moje krevní vrstva", person: "Riki"},
        {text: "Fajn lidi a trenéři. Příjemný přístup k nováčkům a příjemné prostředí", person: "David"}
    ];

    const [index, setIndex] = useState(0);

     // useCallback to prevent function recreation
  const handleNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  }, [testimonies.length]);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
  };

  // Automatically change testimonies every 15 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 15000); // 15 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [handleNext]); 

    return (
        <section id='testimonials'>
            <div>
                <h2 className='text-center'>Co o nás říkají studenti</h2>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text>"{testimonies[index].text}"</Card.Text>
                                <Card.Footer>- {testimonies[index].person}</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-3 mb-3'>
                    <Col className='text-center'>
                        <Button variant='primary' size='lg' onClick={handlePrev}>Předchozí</Button>
                        <Button variant='primary' size='lg' className='ms-3' onClick={handleNext}>Další</Button>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Testimonials;