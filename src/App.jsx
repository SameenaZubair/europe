import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Place from "./components/Place";
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Book from './components/Book';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Place />
      <Services />
      <Reviews />
      <Book />
      <Footer />
    </>
  );
}

export default App;