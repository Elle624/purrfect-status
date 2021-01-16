import React, { useState, useEffect } from 'react';
import Picture from '../Picture';
import Form from '../Form';
import './Home.scss'

const Home = () => {
  const [userInput, setUserInput] = useState(null);
  const [savedPawtraits, setSavedPawtraits] = useState([]);

  const getUserInput = newInput => {
    setUserInput(newInput);
  }
 
  const savePawtrait = (newPawtrait) => {
    
    if (savedPawtraits.length && newPawtrait.isFavorite) {
      const duplicatedPawtrait = savedPawtraits.find(pawtrait => pawtrait.id === newPawtrait.id);
      setSavedPawtraits(prev => duplicatedPawtrait ? [...prev] : [...prev, newPawtrait])
    } else if (newPawtrait.isFavorite) {      
      setSavedPawtraits([newPawtrait]);
    }
  }

  useEffect(() => {
    if(userInput) {savePawtrait(userInput)}
  }, [userInput])
  
  return (
    <section className="home-page">
      <nav className="nav-section">
        <h1>Purrfect Status</h1>
        <button>Status Pawtrait</button>
      </nav>
      <section className="display-picture-form-section">
        <Picture 
          setUserInput={setUserInput} 
          userInput={userInput} />
        <Form getUserInput={getUserInput}/>
      </section>
    </section>
  )
}

export default Home