import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import rev1 from '../assets/rev1.jpeg';
import rev2 from '../assets/rev2.jpeg';
import rev3 from '../assets/rev3.jpeg';
import rev4 from '../assets/rev4.jpeg';
import rev5 from '../assets/rev5.jpeg';


const reviews = [
  { name: "John", image: rev1, review: " Lorem ipsum dolor, sit amet consectetur adipisicing elit amet consecutor sit amet consectetur adipisicing elit.  ", rating: 4 },
  { name: "Jane Doe", image: rev2, review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.elit sit amet consectetur  Minima ea at quis!" , rating: 5 },
  { name: "Sam", image: rev3, review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. elit sit amet consectetur  Numquam, architecto." , rating: 4 },
  { name: "Charlie", image: rev4, review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. elit sit amet consectetur Hic qui neque obcaecati saepe!"  , rating: 5 },
  { name: "Macks", image: rev5, review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.elit sit amet consectetur  Similique, expedita." , rating: 4 },
];

const ReviewCard = ({ review }) => (
  
  <div className= "bg-gradient-to-r from-gray-300 to-teal-500 w-full p-4 rounded-lg shadow-md text-center">
    <img src={review.image} alt={review.name} className="w-24 h-24 mt-10 rounded-md mx-auto mb-4" />
    <h3 className="text-2xl font-semibold">{review.name}</h3>
    <p className="text-black text-lg 600 mt-2">{review.review}</p>
    <div className="flex justify-center mt-2">
      {Array(review.rating).fill().map((_, i) => (
        <span key={i} className="text-yellow-500 text-2xl">&#9733;</span>
      ))}
    </div>
   </div>
 
);

const ReviewSlider = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };


  return (
    <div className="w-screen bg-gradient-to-b from-teal-700 to-teal-500 h-auto mx-auto p-4  ">
      <header className="text-3xl font-bold underline mt-5 pt-5 mb-10 text-center">
        Client Review
      </header>
      <Slider {...settings} className="bg-black ">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Slider>
     
    </div>
  );
};

export default ReviewSlider;
