import React, { useState, useEffect } from 'react';
import { getCatPicture } from '../../apiCalls';
import './Picture.scss';
import { IoPawSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

const Picture = ({ setUserInput, userInput }) => {
  const [pictureUrl, setPictureUrl] = useState('');
  const [error, setError] = useState('');
  let isMounted = false;

  const generateRandomCatPicture = () => {
    isMounted = true;
    getCatPicture()
      .then((data) => {
        if (isMounted) {
          setPictureUrl(data[0].url);
          setUserInput(null);
        }
      })
      .catch((err) => setError(err.message));
  };

  const saveFavoriteCatPicture = () => {
    setUserInput({
      ...userInput,
      isFavorite: !userInput.isFavorite,
      url: pictureUrl
    });
  };

  useEffect(() => {
    generateRandomCatPicture();
    return () => (isMounted = false);
  }, []);

  return (
    <section className='picture-section' data-testid='picture-section'>
      {!pictureUrl && !error && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div
        className='cat-picture-wrapper'
        data-testid='background-cat-image'
        style={{
          backgroundImage: `url(${pictureUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='icon-wrapper'>
          {userInput && (
            <IoPawSharp
              className='icon'
              data-testid='paw-icon'
              onClick={() => saveFavoriteCatPicture(userInput)}
              style={{ color: userInput.isFavorite ? '#177fcc' : 'white' }}
            />
          )}
        </div>
        <figure className='dispay-inputs-wrapper'>
          <p data-testid='user-inputs'>{userInput && userInput.statusCode}</p>
          <p data-testid='user-inputs'>{userInput && userInput.explaination}</p>
        </figure>
      </div>
      <div>
        <button onClick={generateRandomCatPicture}>Not Purrfect</button>
      </div>
    </section>
  );
};

export default Picture;

Picture.propTypes = {
  setUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.object
};
