import React from 'react';
import './Home.scss'

const Home = ({ children }) => {
  
  return (
    <section className="home-page">
      <nav className="nav-section">
        <h1>Purrfect Status</h1>
        <button>Status Pawtrait</button>
      </nav>
      <section className="display-picture-form-section">
        {children}
      </section>
    </section>
  )
}

export default Home