import React, { useState, useEffect } from 'react';
import { getCatPicture } from '../../apiCalls';
import Form from '../Form';
import './Home.scss'

const Home = () => {
  const [pictureUrl, setPictureUrl] = useState('');

  const generateRandomCatPicture = () => {
    getCatPicture().then(data =>setPictureUrl(data[0].url))
  }

  useEffect(() => generateRandomCatPicture(), [])
  
  return (
    <section className="home-page">
      <nav className="nav-section">
        <h1>Purrfect Status</h1>
        <button>Status Pawtrait</button>
      </nav>
      <section className="display-picture-form-section">
        <section className="picture-section">
          <div 
            className="cat-picture-wrapper" 
            style={{
              backgroundImage: `url(${pictureUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-reapeat"
            }}>
          </div>
          <div>
            <button onClick={generateRandomCatPicture}>Not Purrfect</button>
          </div>
        </section>
        <Form />
      </section>
    </section>
  )
}

export default Home