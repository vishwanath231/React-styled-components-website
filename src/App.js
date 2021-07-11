import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Customer from './components/Customer';
import Brand from './components/Brand';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Customer />
      <Brand />
      <Pricing />
      <Footer />
    </>
  )
}

export default App;

