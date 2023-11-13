// src/components/Gallery.js
import React from 'react';
import './Gallery.css';
import people1 from '../assets/people-1.png';
import people2 from '../assets/people-2.png';
import morning2 from '../assets/morning-2.png';
import sky2 from '../assets/sky-2.png';
import animal1 from '../assets/animal-1.png';
import animal2 from '../assets/animal-2.png';

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>MY GALLERY</h2>
      <div className="photo-grid">
        <div className="photo-item">
          <img src={people1} alt="Foto 1" />
          <p>Bestie with the view:D</p>
        </div>
        <div className="photo-item">
          <img src={animal1} alt="Foto 7" />
          <p>Neighbor's cat</p>
        </div>
        <div className="photo-item">
          <img src={morning2} alt="Foto 4" />
          <p>Sunday Market in Lembang</p>
        </div>
        <div className="photo-item">
          <img src={sky2} alt="Foto 6" />
          <p>Good morning...</p>
        </div>
        <div className="photo-item">
          <img src={animal2} alt="Foto 8" />
          <p>What are u doing here, Buddy?</p>
        </div>
        <div className="photo-item">
          <img src={people2} alt="Foto 2" />
          <p>Look how cute you are...^v^</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
