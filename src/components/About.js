// src/components/About.js
import React from 'react';
import './About.css';
import myPhoto from '../assets/susan-photo.png';

function About() {
  return (
      <div className="about-content">
        <div className="about-text">
            <h2>Bandung, November 10, 2003</h2>
            <p className='big-point'>
                My full name is Susanti.
                I was born as the evening approached, 
                precisely after the Maghrib call to prayer echoed on Monday, November 10, 2003.</p>
            <h2>Educational History</h2>
                <ul>
                    <li>
                        <h3>SD Negeri 6 Cikidang (2010 - 2016)</h3>
                        <p className='school-desc'>
                            I attended my primary education at SD Negeri 6 Cikidang,
                            a school located only 350 meters from my home.
                        </p>
                    </li>
                    <li>
                        <h3>SMP Negeri 5 Lembang (2016-2019)</h3>
                        <p className='school-desc'>
                            I pursued my junior high school education at SMP Negeri 5 Lembang.
                            The school is still located in the same village where I live.
                        </p>
                    </li>
                    <li>
                        <h3>SMA Negeri 1 Lembang (2019-2022)</h3>
                        <p className='school-desc'>
                            I completed my high school education at SMA Negeri 1 Lembang.
                            The commute from home to school took about 20 minutes.</p>
                    </li>
                </ul>
            <h2>AND NOW...</h2>
            <p className='big-point'>
                I am an active third-semester student at the Universitas Pendidikan Indonesia, 
                majoring in Computer Science Education.
                I am interested in technology and enjoy learning new things.</p>
        </div>
        <div className="about-image">
            <img src={myPhoto} alt="My Photo" />
        </div>
      </div>
  );
}

export default About;
