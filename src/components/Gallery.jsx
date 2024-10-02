import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import Loader from './Loader';

const Gallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const images = [
    '../image/action.jpeg',
    '../image/action2.jpeg',
    '../image/fight.jpg',
    '../image/nacvik1.jpeg',
    '../image/postoj1.jpeg',
    '../image/postoj2.jpeg',
    '../image/postoj3.jpeg',
    '../image/stoj.jpeg',
    '../image/pozdrav.jpeg',
    '../image/pray.jpg',
    '../image/showtime.jpeg',
    '../image/start.jpeg',
    '../image/studenti.jpeg',
    '../image/sword.jpg',
    '../image/nastup.jpg',
    '../image/fun_nastup.jpg'
    ];

    const handleShow = (image) => {
        setSelectedImage(image);
        setShowModal(true);
      };
    
      const handleClose = () => {
        setShowModal(false);
        setSelectedImage('');
      };

      const [loading, setLoading] = useState(true);

      const handleImageLoad = () => {
        setLoading(false);
      }
    
      return (
        <section id='gallery'>
          <div className='gallery-container'>
              <h2 className='text-center'>Galerie</h2>
            <Row>
              {images.map((image, index) => (
                <Col md={3} key={index} className="mb-3 d-flex justify-content-center">
                  {loading && <Loader />}
                  <img 
                    src={image} 
                    alt={`Gallery pic ${index + 1}`} 
                    className="img-fluid gallery-image cursor-pointer" 
                    onClick={() => handleShow(image)} 
                    style={{ display: loading ? 'none' : 'block'}}
                    onLoad={handleImageLoad}
                  />
                </Col>
              ))}
            </Row>
      
            <Modal show={showModal} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Obrázek</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src={selectedImage} alt="Selected" className="img-fluid" />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Zavřít</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </section>
      );
    };

export default Gallery;