import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Loader from './Loader';

const Video = () => {
    const [loading, setLoading] = useState(true);

    const handleVideoLoad = () => {
        setLoading(false);
    };

    return (
        <Row className='justify-content-center mt-4' g={4}>
            <Col md={4} className='d-flex justify-content-center mb-4'>
                {loading && <Loader />}
                <div className='video-container' style={{ width: '50%' }}>
                    <video width='100%' onLoadedData={handleVideoLoad} controls>
                        <source src='../video/vid1.mp4' type='video/mp4' />
                    </video>
                </div>
            </Col>
            <Col md={4} className='d-flex justify-content-center mb-4'>
                {loading && <Loader />}
                <div className='video-container' style={{ width: '50%' }}>
                    <video width='100%' onLoadedData={handleVideoLoad} controls>
                        <source src='../video/vid2.mp4' type='video/mp4' />
                    </video>
                </div>
            </Col>
            <Col md={4} className='d-flex justify-content-center mb-4'>
                {loading && <Loader />} 
                <div className='video-container' style={{ width: '50%' }}>
                    <video width='100%' onLoadedData={handleVideoLoad} controls>
                        <source src='../video/vid3.mp4' type='video/mp4' />
                    </video>
                </div>
            </Col>
        </Row>
    );
    
}       

export default Video;