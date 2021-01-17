import React from 'react';
import './Home.scss';

const Home = ({ children }) => (
  <section className='home-page' data-testid='home-page'>
    <section className='display-picture-form-section'>{children}</section>
  </section>
);

export default Home;
