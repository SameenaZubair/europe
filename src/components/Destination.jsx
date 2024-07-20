import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bgcover from "../assets/bgcover.jpg";

import London from '../assets/London.jpeg';
import Tromso from '../assets/Tromso.jpeg';
import Amsterdam from '../assets/Amsterdam.jpeg';
import Paris from '../assets/Paris.jpeg';
import Brussels from '../assets/Brussels.jpeg';
import Venice from '../assets/Venice.jpeg';
import Zurich from '../assets/Zurich.jpeg';
import Edinburgh from '../assets/Edinburgh.jpeg';

const slides = [
  { image: London, heading: 'London', description: 'London, the British capital, is a global hub of culture, history, and entertainment. Iconic landmarks like Buckingham Palace, the Tower of London, and Big Ben stand alongside world-class museums, theaters, and trendy neighborhoods like Shoreditch and Camden. London\'s diverse energy and cosmopolitan vibe make it a vibrant and unforgettable city.' },
  { image: Tromso, heading: 'Tromso', description: 'Tromso, the "Gateway to the Arctic," is a charming Norwegian city surrounded by snow-capped mountains, fjords, and the Northern Lights. This polar hub is known for its vibrant cultural scene, historic wooden houses, and Arctic Cathedral. Tromso\'s rugged beauty and winter wonderland activities like dog sledding and skiing make it a unique and adventurous destination.' },
  { image: Amsterdam, heading: 'Amsterdam', description: 'Amsterdam, the "Venice of the North," is a charming city of canals, bridges, and vibrant culture. Historic architecture, museums like the Rijksmuseum and Van Gogh Museum, and the infamous Red Light District coexist with a liberal attitude and quirky, artistic vibe. Bicycles and boats navigate the city\'s winding waterways, adding to Amsterdam\'s unique, laid-back charm.' },
  { image: Paris, heading: 'Paris', description: 'Paris, the capital of France, is a stunning metropolis famous for its iconic Eiffel Tower, art museums like the Louvre, and romantic River Seine. The city\'s charming streets, cafes, and historic landmarks like Notre-Dame Cathedral make it a destination for love, art, and magic.' },
  { image: Brussels, heading: 'Brussels', description: 'Brussels, the capital of Belgium, is a vibrant city blending history and modernity. The Grand Place, a UNESCO World Heritage Site, showcases ornate Gothic architecture, while the Atomium and EU institutions exemplify the city\'s forward-thinking spirit. Chocolate shops, beer bars, and waffle vendors add to the charm of this multicultural, cosmopolitan hub.' },
  { image: Venice, heading: 'Venice', description: 'Venice, Italy\'s floating city, is a mesmerizing tapestry of canals, ornate bridges, and stunning St. Mark\'s Square. Historic gondolas and ornate palaces seem to rise from the water, while the Grand Canal winds through the city\'s heart. Romance and magic fill the air in this unique, breathtakingly beautiful destination.' },
  { image: Zurich, heading: 'Zurich', description: 'Zurich, Switzerland\'s largest city, is a picturesque hub of finance, culture, and natural beauty. Surrounded by the Swiss Alps and situated on Lake Zurich, the city offers stunning views, historic architecture, and world-class museums like the Kunsthaus. Bahnhofstrasse, one of Europe\'s most famous shopping streets, adds to Zurich\'s charm.' },
  { image: Edinburgh, heading: 'Edinburgh', description: 'Edinburgh, Scotland\'s capital, is a charming city steeped in history and culture. The picturesque Old Town, with its medieval architecture and famous Royal Mile, contrasts with the elegant Georgian New Town. Edinburgh Castle, perched atop a dormant volcano, overlooks the city, while the arts and festivals thrive in this vibrant, cosmopolitan hub.' },
];

const Destination = () => {
  return (
    <div className="relative w-full h-screen" id="Destination">
      <img src={bgcover} alt="Background" className="w-full h-full object-cover blur-sm absolute -z-10" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
          infiniteLoop={true}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex items-center justify-between sm:text-xl h-screen px-10">
              <div className="text-teal w-2/3">
                <h1 className="text-4xl font-bold text-black">{slide.heading}</h1>
                <p className="m-2 text-sm md:text-lg sm:text-center text-black text-bold bg-teal-400 bg-opacity-25 backdrop-blur-md">{slide.description}</p>
                <Link to="Book" smooth duration={500}> 
                  <button className="mt-3 px-4 py-2 bg-teal-700 text-white rounded-lg border-2 hover:bg-teal-600 hover:scale-105 duration-200 cursor-pointer">Book Now</button>
                </Link>
              </div>
              <div className="w-1/3">
                <img src={slide.image} alt={slide.heading} className="rounded-lg h-sm shadow-lg" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Destination;
