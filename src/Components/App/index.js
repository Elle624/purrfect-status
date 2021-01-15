import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from '../Home';
import Picture from '../Picture';
import Form from '../Form';
import './App.scss';

function App() {
  const [userInput, setUserInput] = useState(null);

  const getUserInput = newInput => {
    setUserInput(newInput);
  }
  
  return (
    <main className="main-body">
      <Route 
        exact path="/"
        render={(() => 
          <Home>
            <Picture setUserInput={setUserInput} userInput={userInput}/>
            <Form getUserInput={getUserInput}/>
          </Home> 
        )}
      />

      {/* <Route 
        exact path="/status-pawtrait"
        component={Home}
      /> */}
    </main>
  );
}

export default App;
