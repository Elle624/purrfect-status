import React from "react";
import { Route } from "react-router-dom";
import Home from '../Home';
import Pawtraits from '../Pawtraits';

import './App.scss';

function App() {
  
  return (
    <main className="main-body">
      <Route 
        exact path="/"
        component={Home}
      />

      <Route 
        exact path="/status-pawtrait"
        component={Pawtraits}
      />
    </main>
  );
}

export default App;
