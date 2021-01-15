import React, { useState, useEffect } from 'react';
import { getCatPicture } from '../../apiCalls';
import './Home.scss'

const Home = () => {
  const [statusCode, setStatusCode] = useState('');
  const [explaination, setExplaination] = useState('');
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
              <p>{statusCode}</p>
          </div>
          <div>
            <button onClick={generateRandomCatPicture}>Not Purrfect</button>
          </div>
        </section>
        <form className="form-section">
          <div className="input-wrapper">
            <label htmlFor="status-code-input">Status Code</label>
            <input  
              id="status-code-input"
              name="status-code"
              type="number"
              className="status-input status-code"
              value={statusCode}
              placeholder="i.e 201"
              onChange={(e) => setStatusCode(e.target.value)}
            >
            </input>
          </div>
          <div className="input-wrapper explaination-input-wrapper">
            <label htmlFor="explaination-input">What does {statusCode || 'it'} represents?</label>
            <textarea 
              id="explaination-input"
              name="status-explaination"
              type="text"
              className="status-input status-explaination"
              value={explaination}
              placeholder="i.e Created"
              onChange={(e) => setExplaination(e.target.value)}
            >
            </textarea>
          </div>
          <div>
            <button>Purrfect!</button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Home