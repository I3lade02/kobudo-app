import React from 'react';
import { Image } from 'react-bootstrap';

const Gallery = () => (
    <section id='gallery' className='text-center p-5'>
        <h2>Galerie</h2>
        <div className='gallery-grid'>
            <Image src='#' thumbnail />
            <Image src='#' thumbnail />
        </div>
    </section>
);

export default Gallery;