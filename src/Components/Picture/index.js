import React, { useState, useEffect } from 'react';
import { getCatPicture } from '../../apiCalls';
import './Picture.scss'
import { IoPawSharp } from 'react-icons/io5';

const Picture = ({ setUserInput, userInput }) => {
  const [pictureUrl, setPictureUrl] = useState('');

  const generateRandomCatPicture = () => {
    getCatPicture().then(data =>{
      setPictureUrl(data[0].url);
      setUserInput(null);
    })
  }

  const saveFavoriteCatPicture = () => {
    setUserInput(prevInput => ({
      ...prevInput,  
      isFavorite: !prevInput.isFavorite,
      url: pictureUrl
    }));
  }

  useEffect(() => generateRandomCatPicture(), [])
    
  return (
    
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
          {userInput && <IoPawSharp 
            className="icon" 
            onClick={() => saveFavoriteCatPicture(userInput)} 
            style={{color: userInput.isFavorite ? '#177fcc' : 'white' }}
          />}
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
  )
}

export default Picture