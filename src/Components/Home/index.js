import React, { useState, useEffect } from 'react';
import { getCatPicture } from '../../apiCalls';
import './Home.css'

const Home = () => {
  const [statusCode, setStatusCode] = useState('');
  const [explaination, setExplaination] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');

  const generateRandomCatPicture = () => {
    getCatPicture().then(data =>setPictureUrl(data[0].url))
  }

  useEffect(() => generateRandomCatPicture(), [])
  
  return (
    <section>
      <section>
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
          <button onClick={generateRandomCatPicture}>What else do you have?</button>
        </div>
      </section>
      <form>
        <div>
          <label htmlFor="status-code-input">Status Code</label>
          <input  
            id="status-code-input"
            name="status-code"
            type="number"
            value={statusCode}
            placeholder="i.e 201"
            onChange={(e) => setStatusCode(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label htmlFor="explaination-input">What does {statusCode || 'it'} represents?</label>
          <input  
            id="explaination-input"
            name="status-explaination"
            type="text"
            value={explaination}
            placeholder="i.e Created"
            onChange={(e) => setExplaination(e.target.value)}
          >
          </input>
        </div>
        <div>
          <button>Purrfect! Let's see it!</button>
        </div>
      </form>
      <section>
        <img />
      </section>
    </section>
  )
}

export default Home