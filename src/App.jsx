import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Destination from './components/Destination';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Book from './components/Book';


function App() {
 
return (
    <>
        <Navbar  />
        <Home />
        <About/>
        <Destination />
        <Services/>
        <Reviews/>
        <Book/>
        <Footer/>
        </>
  );
}

export default App;
