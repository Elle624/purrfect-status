import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = ({ getUserInput }) => {
  const [statusCode, setStatusCode] = useState('');
  const [explaination, setExplaination] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    const newInput = {
      statusCode,
      explaination,
      isFavorite: false,
      id: Date.now()
    };
    getUserInput(newInput);
    resetInputs();
  };

  const resetInputs = () => {
    setStatusCode('');
    setExplaination('');
  };

  return (
    <form className='form-section' data-testid='form-section'>
      <div className='input-wrapper'>
        <label htmlFor='status-code-input' className='status-code-label'>
          Status Code
        </label>
        <input
          id='status-code-input'
          name='status-code'
          type='number'
          className='status-input status-code'
          value={statusCode}
          placeholder='i.e 201'
          onChange={(e) => setStatusCode(e.target.value)}
        ></input>
      </div>
      <div className='input-wrapper explaination-input-wrapper'>
        <label
          htmlFor='explaination-input'
          className='status-explaination-label'
        >
          What does {statusCode || 'it'} represents?
        </label>
        <textarea
          id='explaination-input'
          name='status-explaination'
          type='text'
          className='status-input status-explaination'
          value={explaination}
          placeholder='i.e Created'
          onChange={(e) => setExplaination(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={handleClick}>Purrfect!</button>
      </div>
    </form>
  );
};

export default Form;

Form.propTypes = {
  getUserInput: PropTypes.func.isRequired
};
