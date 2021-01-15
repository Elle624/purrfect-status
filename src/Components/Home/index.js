import React, { useState } from 'react';
import Picture from '../Picture';
import Form from '../Form';
import './Home.scss'

const Home = () => {
  const [userInput, setUserInput] = useState(null);

  const getUserInput = newInput => {
    setUserInput(newInput);
  }
  
  return (
    <section className="home-page">
      <nav className="nav-section">
        <h1>Purrfect Status</h1>
        <button>Status Pawtrait</button>
      </nav>
      <section className="display-picture-form-section">
        <Picture setUserInput={setUserInput} userInput={userInput}/>
        <Form getUserInput={getUserInput}/>
      </section>
    </section>
  )
}

export default Home