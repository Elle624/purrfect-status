import React, { useState, useEffect } from 'react';
import { getCatPicture } from '../../apiCalls';
import Form from '../Form';
import './Home.scss'
import { IoPawSharp } from 'react-icons/io5';

const Home = () => {
  const [pictureUrl, setPictureUrl] = useState('');
  const [userInput, setUserInput] = useState(null);

  const generateRandomCatPicture = () => {
    getCatPicture().then(data =>{
      setPictureUrl(data[0].url);
      setUserInput(null);
    })
  }

  const getUserInput = newInput => {
    setUserInput(newInput);
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
              backgroundRepeat: "no-repeat"
            }}>
            <div className="icon-wrapper">
              {userInput && <IoPawSharp className="icon"/>}
            </div>
            <figure className="dispay-inputs-wrapper">
              <p>{userInput && userInput.statusCode}</p>
              <p>{userInput && userInput.explaination}</p>
            </figure>
          </div>
          <div>
            <button onClick={generateRandomCatPicture}>Not Purrfect</button>
          </div>
        </section>
        <Form getUserInput={getUserInput}/>
      </section>
    </section>
  )
}

export default Home