import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Charity from "../../Assets/Images/Charity.png";
import CharityGirl from "../../Assets/Images/CharityGirl.png";
import CharityHelping from "../../Assets/Images/CharityHelping.png";
import Community from "../../Assets/Images/Community.png";
import Fundraising from "../../Assets/Images/Fundraising.png";
import CharityHeart from "../../Assets/Images/CharityHeart.png";

const Carousel = () => {
  const images = [
    Charity,
    CharityGirl,
    CharityHelping,
    Community,
    Fundraising,
    CharityHeart,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${
          currentIndex * carouselRef.current.offsetWidth
        }px)`;
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-96 h-96 flex  justify-self-center">
      <div ref={carouselRef} className="flex transition-transform duration-500">
        {images.map((image, index) => (
          <div key={index} className="w-full h-auto  flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover  "
            />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
