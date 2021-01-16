import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from '../Home';
import Picture from '../Picture';
import Form from '../Form';
import Pawtraits from '../Pawtraits';
import './App.scss';


function App() {
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
    <main className="main-body">
      <nav className="nav-section">
        <h1>Purrfect Status</h1>
        <Link to='/saved-pawtraits'>
          <button>Saved Pawtraits</button>
        </Link>
      </nav>
      <Route 
        exact path="/"
        render={() => 
          <Home>
            <Picture 
              setUserInput={setUserInput} 
              userInput={userInput} 
            />
            <Form getUserInput={getUserInput}/>
          </Home>
        }
        // component={Home}
      />

      <Route 
        exact path="/saved-pawtraits"
        render={() => <Pawtraits savedPawtraits={savedPawtraits}/>}
      />
    </main>
  );
}

export default App;
